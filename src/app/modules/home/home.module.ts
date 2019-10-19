import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstablishmentModule } from '../ establishment/ establishment.module';
import { EstablishmentComponent } from '../ establishment/ establishment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    HomeRoutingModule,
    SharedModule,
    EstablishmentModule
  ],
  declarations: [HomeComponent],
  entryComponents:[EstablishmentComponent],
  providers:[]
})
export class HomeModule {}
