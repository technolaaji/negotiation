// this mongoose schema is responsible for how the data will be available in the database

import * as mongoose from 'mongoose';

export const userAuthSchema = new mongoose.Schema({
  username: String,
  password: String,
});
