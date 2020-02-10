// this interface is used when you don't need to have validation on the passing data

import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  password: string;
}
