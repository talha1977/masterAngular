import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './auth-practicec/components/forget-password/forget-password.component';
import { LoginComponent } from './auth-practicec/components/login/login.component';
import { NotFoundComponent } from './auth-practicec/components/not-found/not-found.component';
import { AuthGuard } from './auth-practicec/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => {
      return import('./auth-practicec/modules/admin/admin.module').then(
        (p) => p.AdminModule
      );
    },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
