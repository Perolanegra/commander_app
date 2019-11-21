import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GetCommandClosedByUserIdResolver } from 'src/app/shared/services/getCommandClosedByUserIdResolver.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      myOrders: GetCommandClosedByUserIdResolver
    },
    runGuardsAndResolvers: 'always'
    // canActivate: NoAuth
  },
 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // 
  ],
  exports: [RouterModule],
  providers: [
    // resolvers
    GetCommandClosedByUserIdResolver
  ]
})
export class HomeRoutingModule {}
