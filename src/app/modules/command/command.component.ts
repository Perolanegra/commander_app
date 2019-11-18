import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DefaultScreen } from '../core/defaultScreen';
@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent extends DefaultScreen implements OnInit {
  switchVar: string = 'menu';

  constructor(protected route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {
    
  }

  handleSwitch(newSwitch: string) {
    this.switchVar = newSwitch;
  }

  addToTable(items) {
    let tableProducts = JSON.parse(localStorage.getItem('tableProducts'));
    
    if(tableProducts == null) {
      tableProducts = new Array();
    }

    for (let [key] of items.entries()) {
      tableProducts.push(key);
    }

    localStorage.setItem('tableProducts', JSON.stringify(tableProducts));
    this.switchVar = 'table';
  }

  public get products() {
    return this.respResolvers.products;
  }

  public get visit(): Boolean {
    return this.respResolvers.visit;
  }

  public get QRCodeData() {
    return this.route.snapshot.queryParams;
  }

}
