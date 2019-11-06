import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent {
  switchVar: string = 'menu';

  constructor(protected route: ActivatedRoute) { }

  handleSwitch(newSwitch: string) {
    this.switchVar = newSwitch;
  }

  addToTable(items) {
    console.log('event: ', items);
    this.switchVar = 'table';
  }

  public get QRCodeData() {
    return this.route.snapshot.queryParams;
  }

}
