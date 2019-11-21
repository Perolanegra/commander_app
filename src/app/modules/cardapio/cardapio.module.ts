import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CardapioComponent } from "./cardapio.component";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        CardapioComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
    ]
})
export class CardapioModule { }