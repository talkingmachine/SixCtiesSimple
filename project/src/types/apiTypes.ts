type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}

type AuthData = {
  login: string;
  password: string;
}

export type {UserData, AuthData};
