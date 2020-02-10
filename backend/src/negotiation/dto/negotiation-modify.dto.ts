// this dto is used to verify and validate the data that is getting passed when modifying a negotiation

import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class NegotiationModifyDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
