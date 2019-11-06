import { Component, Input } from '@angular/core';
import { AppController } from '../../core/appController';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() products;
  footerDisplayTotal = 0;
  productsID;

  constructor(private appController: AppController) {
    this.productsID = new Set();
  }

  ngOnInit() {
    console.log('produtos: ', this.products);
  }

  addItem(product) {
    product['qtd']++;
    if(!this.productsID.has(product)) {
      this.productsID.add(product);
    }

    this.footerDisplayTotal += Number(product['price'].replace(",", "."));
  }

  removeItem(product) {
    if(product['qtd'] > 0) {

      if(this.productsID.has(product) && product['qtd'] == 1) {
        this.productsID.delete(product);
      }

      product['qtd']--;
      if(this.footerDisplayTotal > 0) {
        this.footerDisplayTotal -= Number(product['price'].replace(",", "."));
      }
    }
    else {
      this.appController.showWarning('Item já não está presente no carrinho.');
    }

  }

  addToTable() {
    const tableProducts = Array.from(this.productsID);
    console.log('tableProducts: ', tableProducts);
  }

}
