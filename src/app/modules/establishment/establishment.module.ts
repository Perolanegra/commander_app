import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { EstablishmentComponent } from './establishment.component';
import { EstablishmentService } from './establishment.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { GoogleService } from 'src/app/shared/services/google.service';
import { EstablishmentDetComponent } from './establishment-det/establishment-det.component';
import { MenuDetComponent } from './menu-det/menu-det.component';

const modules = [
  CommonModule,
  IonicModule,
  SharedModule,
];
const providers = [
  EstablishmentService,
  Geolocation,
  NativeGeocoder,
  GoogleService,
  // ModalController
];
@NgModule({
  imports: [...modules],
  declarations: [EstablishmentComponent, EstablishmentDetComponent, MenuDetComponent],
  entryComponents: [EstablishmentDetComponent, MenuDetComponent],
  providers: [...providers]
})
export class EstablishmentModule {}
