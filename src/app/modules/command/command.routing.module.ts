import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandComponent } from './command.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'command', pathMatch: 'full'
  },
  {
    path: 'command',
    component: CommandComponent,
    // canActivate: NoAuth
    // runGuardsAndResolvers: 'always'
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
export class CommandRoutingModule {}
