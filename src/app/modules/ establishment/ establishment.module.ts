import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { EstablishmentComponent } from './ establishment.component';
import { EstablishmentService } from './ establishment.service';
import { DistanceService } from 'src/app/shared/distance.service';

const modules = [
  CommonModule,
  IonicModule,
  SharedModule
]
@NgModule({
  imports: [...modules],
  declarations: [EstablishmentComponent],
  entryComponents:[],
  providers:[EstablishmentService, DistanceService]
})
export class EstablishmentModule {}
