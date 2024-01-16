import { Routes } from '@angular/router';
import { LoginComponent } from './ui/pages/public/login/login.component';
import { RegisterComponent } from './ui/pages/public/register/register.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
