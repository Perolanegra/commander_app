import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'settings', pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsComponent,
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
export class SettingsRoutingModule {}
