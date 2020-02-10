// this is used to validate the ids that gets send so that users don't send empty ids

import { IsNotEmpty, IsString } from 'class-validator';

export class NegotiationIdDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
