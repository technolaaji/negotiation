// this strategy is responsible for verifying users

import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JWT } from './jwt.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './auth-user.interface';
import { Model } from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // the mongoose model
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    super({
      // this is used to identify where the token is coming from
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // this flag is used to identify that expired tokens won't pass at all
      ignoreExpiration: false,
      secretOrKey: String(process.env.JWT),
    });
  }
  async validate(payload: JWT) {
    const { username } = payload;
    const found = await this.userModel.findOne({ username });
    if (!found) {
      throw new UnauthorizedException(); // if the user is not found then you cannot proceed
    }
    return { username }; // this gets returned in the request block inside other controllers
  }
}
