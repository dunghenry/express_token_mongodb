import {IUserToken} from './../types/index.d';
import {Schema, model} from 'mongoose';
const userTokenSchema = new Schema<IUserToken>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 30 * 86400,
  },
}, {
  timestamps: true,
});

const UserToken = model<IUserToken>('UserToken', userTokenSchema);
export default UserToken;
