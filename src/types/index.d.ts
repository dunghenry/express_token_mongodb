export type IPort = string | number
export interface IUser{
  userName: String;
  email: String;
  password: String;
  roles: Array<string>;
}

export interface IUserToken{
  userId: String;
  refreshToken: String;
  createdAt: Date;
}
