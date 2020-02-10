import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Negotiation } from './negotiation.interface';
import { NegotiationDto } from './dto/negotiation-request.dto';
import { JWT } from '../auth/jwt.interface';
import * as moment from 'moment';
import * as mongoose from 'mongoose';
import { NegotiationModifyDto } from './dto/negotiation-modify.dto';
import { SearchQueryDto } from './dto/search-type.dto';

@Injectable()
export class NegotiationService {
  constructor(
    @InjectModel('negotiation')
    private readonly negotiationModel: Model<Negotiation>, // the negotiation model
  ) {}

  async getNegotiation(negotiationQuery: SearchQueryDto, user: JWT) {
    const { search } = negotiationQuery; // query param from the url provided
    const { username } = user; // the username fetched from the user block
    // this switch case is responsible for what type of data will it will output based on the query param provided if satisfied
    switch (search) {
      case 'ACCEPT':
        return await this.negotiationModel.find({
          $or: [
            { from: username, from_status: 'ACCEPT' },
            { to: username, to_status: 'ACCEPT' },
          ],
        });
      case 'DECLINE':
        return await this.negotiationModel.find({
          $or: [
            { from: username, from_status: 'DECLINE' },
            { to: username, to_status: 'DECLINE' },
          ],
        });
      case 'PENDING':
        return await this.negotiationModel.find({
          from: username,
          from_status: 'PENDING',
        });
      case 'ACTION_REQUIRED':
        return await this.negotiationModel.find({
          to: username,
          to_status: 'ACTION_REQUIRED',
        });
    }
  }

  async createNegotiation(negotiationRequest: NegotiationDto, user: JWT) {
    const { username } = user;
    const { to, price } = negotiationRequest;
    const transaction = {
      from: username,
      to,
      price,
      timestamp: moment(),
      from_status: 'PENDING',
      to_status: 'ACTION_REQUIRED',
    };
    await this.negotiationModel.create(transaction);
    return transaction;
  }

  async acceptNegotiation(negotiationRequest: string) {
    const id = new mongoose.mongo.ObjectID(negotiationRequest);
    const modified = await this.negotiationModel.findByIdAndUpdate(
      id,
      {
        from_status: 'ACCEPT',
        to_status: 'ACCEPT',
      },
      { new: true },
    );
    return modified;
  }

  async declineNegotiation(negotiationRequest: string) {
    const id = new mongoose.mongo.ObjectID(negotiationRequest);
    const modified = await this.negotiationModel.findByIdAndUpdate(
      id,
      {
        from_status: 'DECLINE',
        to_status: 'DECLINE',
      },
      { new: true },
    );

    return modified;
  }

  async modifyNegotiation(negotiationRequest: NegotiationModifyDto) {
    const { id, price } = negotiationRequest;
    const mongoId = new mongoose.mongo.ObjectID(id);
    const modified = await this.negotiationModel.findByIdAndUpdate(
      mongoId,
      {
        price,
      },
      { new: true },
    );

    return modified;
  }
  // only used for counter negotiations
  async archiveNegotiation(id: string) {
    const mongoId = new mongoose.mongo.ObjectID(id);
    await this.negotiationModel.findByIdAndUpdate(mongoId, {
      from_status: 'ARCHIVE',
      to_status: 'ARCHIVE',
    });
  }
  // counter negotiations don't delete or modify an existing negotiation
  // rather it labels it as ARCHIVE and creates a new one
  // the old one is still there but doesn't appear on the site
  // can be used later on to show what the user have negotiated with what prices
  async counterNegotiation(
    negotiationRequest: NegotiationModifyDto,
    user: JWT,
  ) {
    const { id, price } = negotiationRequest;
    const mongoId = new mongoose.mongo.ObjectID(id);
    const found = await this.negotiationModel.findById(mongoId);
    const transaction = {
      to: found.from,
      price,
    };
    await this.archiveNegotiation(id);
    return this.createNegotiation(transaction, user);
  }
}
