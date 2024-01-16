import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './public.routes';
import { RegisterComponent } from './register/register.component';
import { AuthGateway } from '../../../domain/auth/gateways/auth.gatewat';
import { AuthService } from '../../../infrastructure/auth/driver-adapter/auth.service';
import { LoginUsecase } from '../../../domain/auth/usecases/login.usecase';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthService,
    LoginUsecase,
    {
      provide: AuthGateway,
      useExisting: AuthService
    }
  ]
})
export class PublicModule { }
