import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: NoAuth
    // runGuardsAndResolvers
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
export class HomeRoutingModule {}
