import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandComponent } from './command.component';
// import { GetProductsByIdResolver } from 'src/app/shared/services/getProductsByIdResolver.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'command', pathMatch: 'full'
  },
  {
    path: 'command',
    component: CommandComponent,
    // resolve: {
    //   products: GetProductsByIdResolver
    // }
    // canActivate: NoAuth
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // 
  ],
  exports: [RouterModule],
  providers: [
    // GetProductsByIdResolver
  ]
})
export class CommandRoutingModule {}
