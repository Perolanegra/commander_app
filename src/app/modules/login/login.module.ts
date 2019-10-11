import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { AutenticacaoService } from './autenticacao.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        // AutenticacaoService
    ]
})
export class LoginModule { }