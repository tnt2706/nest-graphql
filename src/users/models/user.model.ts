import { Schema, Document } from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      maxLength: 150,
    },
    lastName: {
      type: String,
      trim: true,
      maxLength: 150,
    },

    email: {
      type: String,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      require: true,
    },

    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },

    verify: {
      type: Schema.Types.Boolean,
      default: false,
    },

    roles: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export { UserSchema };

export interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  status: string;
  roles: [string];
}
