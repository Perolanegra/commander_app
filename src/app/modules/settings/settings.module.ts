import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings.routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SettingsRoutingModule
  ],
  declarations: [SettingsComponent],
  entryComponents:[],
  providers:[]
})
export class SettingsModule {}
