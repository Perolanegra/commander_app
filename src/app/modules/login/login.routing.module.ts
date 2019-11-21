import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: NoAuth
    // runGuardsAndResolvers
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // 
  ],
  exports: [RouterModule],
  providers: [
      // resolvers
  ]
})
export class LoginRoutingModule {}
