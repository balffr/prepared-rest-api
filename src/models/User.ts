import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { Document, model, Error, Schema } from 'mongoose';

export type UserDocument = Document & {
  email: string;
  username?: string;
  password: string;

  comparePassword: comparePasswordFunction;
};

const userSchema = new Schema(
  {
    email: { type: String, unique: true, lowercase: true, required: true },
    username: { type: String },
    password: String
  },
  { timestamps: true }
);

/**
 * Password hash middleware.
 */
userSchema.pre('save', function save(next) {
  const user = this as UserDocument;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err: Error, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void;

const comparePassword: comparePasswordFunction = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err: Error, isMatch: boolean) => {
    cb(err, isMatch);
  });
};

userSchema.methods.comparePassword = comparePassword;

export const User = model<UserDocument>('User', userSchema);
