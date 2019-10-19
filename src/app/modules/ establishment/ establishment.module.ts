import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { EstablishmentComponent } from './ establishment.component';
import { EstablishmentService } from './ establishment.service';
import { DistanceService } from 'src/app/shared/services/distance.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { GoogleService } from 'src/app/shared/services/google.service';

const modules = [
  CommonModule,
  IonicModule,
  SharedModule,
];
const providers = [
  EstablishmentService,
  DistanceService,
  Geolocation,
  NativeGeocoder,
  GoogleService
];
@NgModule({
  imports: [...modules],
  declarations: [EstablishmentComponent],
  entryComponents: [],
  providers: [...providers]
})
export class EstablishmentModule {}
