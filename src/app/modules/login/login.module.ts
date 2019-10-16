import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { AutenticacaoService } from './autenticacao.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { IonicModule } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoginRoutingModule } from './login.routing.module';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
    declarations: [
        LoginComponent,
        SignInComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        IonicModule,
        LoginRoutingModule
    ],
    providers: [
        GooglePlus
        // AutenticacaoService
    ]
})
export class LoginModule { }