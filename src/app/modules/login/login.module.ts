import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { AutenticacaoService } from './autenticacao.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { IonicModule, NavParams } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        IonicModule,
        RouterModule.forChild([
            {
              path: '',
              component: LoginComponent
            }
          ]),
    ],
    providers: [
        GooglePlus
        // AutenticacaoService
    ]
})
export class LoginModule { }