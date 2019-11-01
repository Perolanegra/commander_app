import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() products;

  constructor() {}

  ngOnInit() {
    console.log('produtos: ', this.products);
  }


}
