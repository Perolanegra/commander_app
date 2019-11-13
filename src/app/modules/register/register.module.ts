import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from '../login/auth.service';
import { RegisterRoutingModule } from './register.routing.module';
import { RegisterComponent } from './register.component';

const modules = [
    CommonModule,
    SharedModule,
    IonicModule,
    RegisterRoutingModule
]
@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [...modules],
    providers: [
        AuthService
    ],
    entryComponents: []
})
export class RegisterModule { }