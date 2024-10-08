import { Schema, model } from 'mongoose';
import { User } from './user.js';

const sessionSchema = new Schema(
  {
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    accessTokenValidUntil: { type: Date, required: true },
    refreshTokenValidUntil: { type: Date, required: true },
    userId: { type: Schema.ObjectId, required: true, ref: User },
  },
  { timestamps: true, versionKey: false },
);

export const Session = model('sessions', sessionSchema);
