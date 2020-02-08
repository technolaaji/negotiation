import { IsString, IsEnum } from 'class-validator';
import { NegotiationStatus } from '../negotiation.interface';

export class SearchQueryDto {
  @IsString()
  @IsEnum(NegotiationStatus)
  search: string;
}
