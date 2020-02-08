import { IsNotEmpty, IsString } from 'class-validator';

export class NegotiationIdDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
