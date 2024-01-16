import { UserModel } from "./user.model";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: UserModel;
  token: string;
}


