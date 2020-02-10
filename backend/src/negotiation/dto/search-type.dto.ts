// this dto checks the value of the query param if it matches the enum created for search types

import { IsString, IsEnum } from 'class-validator';
import { NegotiationStatus } from '../negotiation.interface';

export class SearchQueryDto {
  @IsString()
  @IsEnum(NegotiationStatus)
  search: string;
}
