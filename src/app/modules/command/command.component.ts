import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DefaultScreen } from '../core/defaultScreen';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent extends DefaultScreen {
  switchVar: string = 'menu';

  constructor(protected route: ActivatedRoute) {
    super(route);
  }

  handleSwitch(newSwitch: string) {
    this.switchVar = newSwitch;
  }

  public get products() {
    return this.respResolvers.products;
  }

}
