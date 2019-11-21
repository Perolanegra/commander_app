import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardapioComponent } from './cardapio.component';
import { AuthGuardService } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'cardapio', pathMatch: 'full' },

    {
        path: 'cardapio',
        component: CardapioComponent,
        resolve: {

        },
        canActivate: [AuthGuardService],
        runGuardsAndResolvers: 'always'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    // resolvers
  ]
})
export class CardapioRoutingModule { }
