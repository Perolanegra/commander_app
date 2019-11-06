import { Component, Input, EventEmitter, Output, OnDestroy, HostListener } from '@angular/core';
import { AppController } from '../../core/appController';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  {
  footerDisplayTotal = 0;
  productsAdded;
  @Output() setTable = new EventEmitter<any>();
  @Input() products;

  constructor(private appController: AppController) {
    this.productsAdded = new Set();
  }

  ngOnInit() {
    this.products.forEach(val => {
      val['qtd'] = 0;
    });

    console.log('lista original: ', this.products);
  }
 
  addItem(product) {
    product['qtd']++;
    if(!this.productsAdded.has(product)) {
      this.productsAdded.add(product);
    }

    this.footerDisplayTotal += Number(product['price'].replace(",", "."));
  }

  removeItem(product) {
    if(product['qtd'] > 0) {

      if(this.productsAdded.has(product) && product['qtd'] == 1) {
        this.productsAdded.delete(product);
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

   /* Emito um evento passando os itens selecionados, e quando for capturado
    o switchVar muda para a tab de Mesa passando os produtos por @Input() no seletor 
   */
  addToTable() {
    this.setTable.emit(this.productsAdded);
  }


}
