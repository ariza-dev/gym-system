import { Routes } from '@angular/router';

export const routesUi: Routes = [
  {
    path: '**',
    redirectTo: 'login',
  },
];
