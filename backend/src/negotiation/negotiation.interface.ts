import { Document } from 'mongoose';

export interface Negotiation extends Document {
  from: string;
  to: string;
  from_status: NegotiationStatus;
  to_status: NegotiationStatus;
  price: number;
  timestamp: string;
}

export enum NegotiationStatus {
  ACCEPT = 'ACCEPT',
  DECLINE = 'DECLINE',
  PENDING = 'PENDING',
  ACTION_REQUIRED = 'ACTION_REQUIRED',
  ARCHIVE = 'ARCHIVE',
}
