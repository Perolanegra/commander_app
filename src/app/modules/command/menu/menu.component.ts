import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AppController } from '../../core/appController';
import { OrderService } from '../../order/order.service';
import { ProductModel } from 'src/app/shared/models/classes/product.model';
import { GlobalVars } from 'src/app/shared/globalVars';
import { ItemsModel } from 'src/app/shared/models/classes/items.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../command.component.scss'],
})
export class MenuComponent {
  footerDisplayTotal = 0;
  productsAdded;
  @Output() setTable = new EventEmitter<any>();
  @Input() products;
  @Input() visit;

  constructor(private appController: AppController,
    private globalVars: GlobalVars,
    private orderService: OrderService) {
    this.productsAdded = new Set();
  }

  ngOnInit() {
    this.products.forEach(val => {
      val['qtd'] = 0;
    });
  }

  addItem(product) {
    product['qtd']++;
    if (!this.productsAdded.has(product)) {
      this.productsAdded.add(product);
    }

    this.footerDisplayTotal += Number(product['price'].replace(",", "."));
  }

  removeItem(product) {
    if (product['qtd'] > 0) {

      if (this.productsAdded.has(product) && product['qtd'] == 1) {
        this.productsAdded.delete(product);
      }

      product['qtd']--;
      if (this.footerDisplayTotal > 0) {
        this.footerDisplayTotal -= Number(product['price'].replace(",", "."));
      }
    }
    else {
      this.appController.showWarning('Item já não está presente no carrinho.');
    }
  }

  /* Emito um evento passando os itens selecionados, e quando for capturado
   o switchVar muda para a tab de Mesa passando os produtos por @Input() no seletor 
  */
  async addToTable() {
    const loader = await this.appController.presentLoadingDefault();
    let products;

    try {
      const itemsModels: ItemsModel[] = Array.from(this.productsAdded).map((p: ProductModel) => {
        return {
          id_product: p._id.toString(),
          qtd_product: p.qtd
        }
      });

      products = await this.orderService.store(itemsModels, this.globalVars.getUserLoggedIn().id_user, this.visit._id);
    } catch (e) {
      this.appController.showError(e);
      console.log('colé de pan: ', e);

    } finally {
      this.setTable.emit(products);
      loader.dismiss();
    }
  }


}
