import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstablishmentModule } from '../establishment/establishment.module';
import { ListEstablishmentComponent } from '../establishment/list-establishment/list-establishment.component';
import { CommandComponent } from './command/command.component';

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
  declarations: [HomeComponent, ListEstablishmentComponent, CommandComponent],
  entryComponents:[ListEstablishmentComponent, CommandComponent],
  providers:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
