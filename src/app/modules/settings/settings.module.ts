import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

const modules = [
  CommonModule,
  IonicModule,
  SettingsRoutingModule,
  SharedModule
]
@NgModule({
  imports: [...modules],
  declarations: [SettingsComponent],
  entryComponents:[],
  providers:[]
})
export class SettingsModule {}
