import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstablishmentModule } from '../establishment/establishment.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { EstablismentListComponent } from '../establishment/establishment-list/establishment-list.component';
import { OrderComponent } from '../order/order.component';
import { OrderModule } from '../order/order.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    SharedModule,
    EstablishmentModule,
    OrderModule,
    NgxQRCodeModule
  ],
  declarations: [HomeComponent, EstablismentListComponent, OrderComponent],
  entryComponents:[EstablismentListComponent, OrderComponent],
  providers: [
    BarcodeScanner,
    Base64ToGallery
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
