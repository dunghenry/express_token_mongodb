import {IUser} from './../types/index.d';
import {Schema, model} from 'mongoose';
const userSchema = new Schema<IUser>({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    enum: ['user', 'admin', 'super_admin'],
    default: ['user'],
  },
}, {
  timestamps: true,
});

const User = model<IUser>('User', userSchema);
export default User;
