import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductService } from 'src/app/shared/services/product.service';
import { OrderDetailsComponent } from './order-details/order-details.component';

const modules = [
  CommonModule,
  IonicModule,
  SharedModule,
];
const providers = [
//   OrderService,
  ProductService
];
@NgModule({
  imports: [...modules],
  declarations: [OrderDetailsComponent],
  entryComponents: [OrderDetailsComponent],
  exports: [],
  providers: [...providers],
})
export class OrderModule {}
