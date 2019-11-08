import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductService } from 'src/app/shared/services/product.service';
import { OrderComponent } from './order.component';

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
  declarations: [OrderComponent],
  exports: [OrderComponent],
  providers: [...providers],
})
export class OrderModule {}
