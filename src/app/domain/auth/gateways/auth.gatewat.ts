import { Observable } from "rxjs";
import { LoginRequest, LoginResponse } from "../models/login.model";

export abstract class AuthGateway {
  abstract login(login: LoginRequest): Observable<LoginResponse>;
}
