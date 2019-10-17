import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { IonicModule } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoginRoutingModule } from './login.routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { ModalPasswordComponent } from './modal-password/modal-password.component';
import { AutofocusModule } from 'angular-autofocus-fix';
import { AuthService } from './auth.service';

@NgModule({
    declarations: [
        LoginComponent,
        SignInComponent,
        ModalPasswordComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        IonicModule,
        LoginRoutingModule,
        AutofocusModule
    ],
    providers: [
        GooglePlus,
        AuthService
        // AutenticacaoService
    ],
    entryComponents: [ModalPasswordComponent]
})
export class LoginModule { }