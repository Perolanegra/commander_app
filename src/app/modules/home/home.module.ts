import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent],
  entryComponents:[],
  providers:[]
})
export class HomeModule {}
