import { Component, Input, EventEmitter, Output, OnDestroy, HostListener } from '@angular/core';
import { AppController } from '../../core/appController';
import { DefaultScreen } from '../../core/defaultScreen';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnDestroy {
  footerDisplayTotal = 0;
  productsID;
  @Output() setTable = new EventEmitter<any>();
  @Input() QRCodeData;
  products;

  constructor(private appController: AppController, 
  private productService: ProductService) {
    this.productsID = new Set();
    
  }
 
  async ngOnInit() {
    this.products = await this.getProducts();
    console.log('nova request produts: ', this.products);
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

   /* Emito um evento passando os itens selecionados, e quando for capturado
    o switchVar muda para a tab de Mesa passando os produtos por @Input() no seletor 
   */
  addToTable() {
    const tableProducts = Array.from(this.productsID);
    this.setTable.emit(tableProducts);
  }

  @HostListener('setTable')
  ngOnDestroy() {
    console.log('fui chamado.');
  }

  public async getProducts() {
    const { id } = this.QRCodeData;
    return await this.productService.getByEstablishmentId(id);
  }


}
