import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  private baseUrl = 'http://localhost:3000'; // Reemplaza con tu base URL

  constructor(private http: HttpClient) { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = httpRequest.clone({ url: `http://localhost:3000/${httpRequest.url}` });
    console.log(apiReq)
    return next.handle(apiReq);
  }

}
