import { HttpClient } from "@angular/common/http";
import { AuthGateway } from "../../../domain/auth/gateways/auth.gatewat";
import { LoginRequest, LoginResponse } from "../../../domain/auth/models/login.model";
import { Observable, of, switchMap } from "rxjs";
import { ResponseApi } from "../../shared/models/response.model";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService implements AuthGateway {

  constructor(
    private http: HttpClient
  ) {

  }

  login(login: LoginRequest): Observable<LoginResponse> {
    return this.http.post<ResponseApi>('auth/login', login).pipe(
      switchMap(res => {
        return of(
          {
            user: {
              userId: res.data.user.userId,
              email: res.data.user.email
            },
            token: res.data.token
          }
        )
      })
    )
  }

}
