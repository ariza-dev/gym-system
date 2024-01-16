import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicModule } from './pages/public/public.module';
import { routesUi } from './ui.routes';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from '../infrastructure/shared/services/http-interceptor.service';
@NgModule({
  imports: [
    RouterModule.forRoot(routesUi),
    PublicModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  exports: [
    RouterModule
  ]
})
export class UiModule { }
