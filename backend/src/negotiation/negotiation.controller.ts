import {
  Controller,
  Get,
  UseGuards,
  Post,
  Body,
  Query,
  UsePipes,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NegotiationService } from './negotiation.service';
import { NegotiationDto } from './dto/negotiation-request.dto';
import { JWT } from '../auth/jwt.interface';
import { getUser } from '../auth/getUserDecorator';
import { NegotiationModifyDto } from './dto/negotiation-modify.dto';
import { SearchQueryDto } from './dto/search-type.dto';

@Controller('negotiation')
@UseGuards(AuthGuard('jwt'))
@UsePipes(ValidationPipe)
export class NegotiationController {
  constructor(private negotationService: NegotiationService) {}

  @Get()
  async getNegotiations(@Query() query: SearchQueryDto, @getUser() user: JWT) {
    if (Object.keys(query).length) {
      return this.negotationService.getNegotiation(query, user);
    } else {
      throw new BadRequestException('define a search type');
    }
  }

  @Post('/create')
  async createNegotiation(
    @Body() negotiationData: NegotiationDto,
    @getUser() user: JWT,
  ) {
    return this.negotationService.createNegotiation(negotiationData, user);
  }

  @Post('/accept')
  async acceptNegotiation(@Body('id') id: string) {
    return this.negotationService.acceptNegotiation(id);
  }

  @Post('/decline')
  async declineNegotiation(@Body('id') id: string) {
    return this.negotationService.declineNegotiation(id);
  }

  @Post('/modify')
  async modifyNegotiation(@Body() negotaitionData: NegotiationModifyDto) {
    return this.negotationService.modifyNegotiation(negotaitionData);
  }

  @Post('/counter')
  async counterNegotiation(
    @Body() negotiationData: NegotiationModifyDto,
    @getUser() user: JWT,
  ) {
    return this.negotationService.counterNegotiation(negotiationData, user);
  }
}
