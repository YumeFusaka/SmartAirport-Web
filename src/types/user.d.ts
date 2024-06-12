export type UserInfo = {
  id: number;
  username: string;
  password: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  identity: string;
}

export type UserLoginParams = {
  username: string;
  password: string;
  identity: string;
}

export type UserLoginResult = {
  token: string;
}
