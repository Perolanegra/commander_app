import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() products;
  footerDisplayTotal = 0;
  productsID;

  constructor() {
    this.productsID = new Set();
  }

  ngOnInit() {
    console.log('produtos: ', this.products);
  }

  addItem(product) {
    product['qtd']++;
    if(!this.productsID.has(product.id)) {
      this.productsID.add(product);
    }

    this.footerDisplayTotal += product['price'];
  }

  removeItem(product) {
    product['qtd']--;
    if(this.productsID.has(product.id)) {
      this.productsID.delete(product);
    }

    this.footerDisplayTotal -= product['price'];
  }


  addToTable() {
    const tableProducts = Array.from(this.productsID);
    console.log('tableProducts: ', tableProducts);
  }

}
