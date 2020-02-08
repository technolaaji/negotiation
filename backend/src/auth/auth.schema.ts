import * as mongoose from 'mongoose';

export const userAuthSchema = new mongoose.Schema({
  username: String,
  password: String,
});
