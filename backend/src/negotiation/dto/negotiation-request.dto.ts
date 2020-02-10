// this dto is used to verify the data when creating a negotiation

import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class NegotiationDto {
  @IsNotEmpty()
  @IsString()
  to: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
