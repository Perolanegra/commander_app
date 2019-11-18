import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CommandComponent } from './command.component';
import { CommandRoutingModule } from './command.routing.module';
import { ProductService } from 'src/app/shared/services/product.service';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { ModalCheckoutComponent } from './table/modal-checkout/modal-checkout.component';
import { VisitService } from '../core/visit.service';
import { OrderService } from '../order/order.service';

const modules = [
  CommonModule,
  IonicModule,
  SharedModule,
  CommandRoutingModule
]

@NgModule({
  imports: [...modules],
  declarations: [CommandComponent, MenuComponent, TableComponent, ModalCheckoutComponent],
  entryComponents:[MenuComponent, TableComponent, ModalCheckoutComponent],
  providers: [
    ProductService,
    VisitService,
    OrderService
  ],
})
export class CommandModule {}
