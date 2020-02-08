import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class NegotiationModifyDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
