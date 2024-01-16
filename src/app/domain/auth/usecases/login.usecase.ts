import { Observable } from "rxjs";
import { AuthGateway } from "../gateways/auth.gatewat";
import { LoginRequest, LoginResponse } from "../models/login.model";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginUsecase {
  constructor(
    private authGateway: AuthGateway
  ) { }

  login(login: LoginRequest): Observable<LoginResponse> {
    return this.authGateway.login(login);
  }
}
