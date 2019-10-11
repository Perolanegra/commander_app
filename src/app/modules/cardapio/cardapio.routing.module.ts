import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './cardapio.component';

const routes: Routes = [
    { path: '', redirectTo: 'produto', pathMatch: 'full' },

    {
        path: 'produto',
        component: ProdutoComponent,
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
