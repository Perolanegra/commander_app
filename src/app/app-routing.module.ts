import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'command',
    loadChildren: () => import('./modules/command/command.module').then(m => m.CommandModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true, onSameUrlNavigation: 'reload' }) // 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
