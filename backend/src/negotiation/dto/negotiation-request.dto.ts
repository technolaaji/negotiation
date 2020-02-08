import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class NegotiationDto {
  @IsNotEmpty()
  @IsString()
  to: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
