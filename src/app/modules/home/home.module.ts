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
import { CommandComponent } from '../command/command.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    HomeRoutingModule,
    SharedModule,
    EstablishmentModule,
    NgxQRCodeModule
  ],
  declarations: [HomeComponent, ListEstablishmentComponent, CommandComponent],
  entryComponents:[ListEstablishmentComponent, CommandComponent],
  providers: [
    BarcodeScanner,
    Base64ToGallery
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
