import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'register', pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
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
export class RegisterRoutingModule {}
