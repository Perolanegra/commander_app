import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DefaultScreen } from '../core/defaultScreen';
import { ProductService } from 'src/app/shared/services/product.service';
@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent extends DefaultScreen implements OnInit {
  switchVar: string = 'menu';
  isFirstSwitchTable: boolean = false;
  @Output() notifyProductsAdded = new EventEmitter<any>();
  @Output() notifyFirstSwitch = new EventEmitter<any>();

  constructor(protected route: ActivatedRoute,
  private productService: ProductService) {
    super(route);
  }

  ngOnInit() {
    
  }

  async handleSwitch(newSwitch: string) {
    // verifico se ele switou pela primeira vez e foi table, e verifico se tem ja comanda aberta.
    if(!this.isFirstSwitchTable && this.command && newSwitch == 'table') {
      // emito um evento só a primeira vez pra ele realizar a requisição trazendo os produtos
      const products = await this.productService.getByVisitId(this.visit._id);
      this.notifyFirstSwitch.emit(products);
      this.isFirstSwitchTable = true;
    }

    this.switchVar = newSwitch;
  }

  addToTable(productsAdded) { // preciso emitir outro evento aqui para o restante da mesa quando um cara adicionar algum item.
    this.notifyProductsAdded.emit(productsAdded);
    this.switchVar = 'table';
  }

  public get products() {
    return this.respResolvers.products;
  }

  public get visit() {
    return this.respResolvers.visit;
  }

  public get QRCodeData() {
    return this.route.snapshot.queryParams;
  }

  public get command() {
    return '';
    // preciso retornar a comanda no resolver.
  }

}
