import { Controller, Get, UseGuards, Req, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NegotiationService } from './negotiation.service';
import { NegotiationDto } from './dto/negotiation-request.dto';
import { JWT } from '../auth/jwt.interface';
import { getUser } from '../auth/getUserDecorator';
import { NegotiationModifyDto } from './dto/negotiation-modify.dto';

@Controller('negotiation')
@UseGuards(AuthGuard('jwt'))
export class NegotiationController {
  constructor(private negotationService: NegotiationService) {}

  @Post('/create')
  async getNegotiations(
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
