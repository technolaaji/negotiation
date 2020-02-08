import * as mongoose from 'mongoose';

export const negotiationSchema = new mongoose.Schema({
  from: String,
  to: String,
  from_status: String,
  to_status: String,
  price: Number,
  timestamp: String,
});
