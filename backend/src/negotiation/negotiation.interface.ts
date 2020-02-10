// this interface is responsible for how the data will be returned/used

import { Document } from 'mongoose';

export interface Negotiation extends Document {
  from: string;
  to: string;
  from_status: NegotiationStatus;
  to_status: NegotiationStatus;
  price: number;
  timestamp: string;
}
// this enum is used for validation purpose
export enum NegotiationStatus {
  ACCEPT = 'ACCEPT',
  DECLINE = 'DECLINE',
  PENDING = 'PENDING',
  ACTION_REQUIRED = 'ACTION_REQUIRED',
  ARCHIVE = 'ARCHIVE', // used only for counter negotiation and keeps previous negotiations
}
