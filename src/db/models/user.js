import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatarUrl: { type: String, default: null },
    role: {
      type: String,
      required: true,
      enum: ['parent', 'teacher'],
      default: 'parent',
    },
  },
  { timestamps: true, versionKey: false },
);

// userSchema.methods.toJSON = function () {
//   const user = this.toObject();
//   delete user.password;
//   return user;
// };

export const User = model('users', userSchema);
