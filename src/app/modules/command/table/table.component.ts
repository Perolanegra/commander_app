import { Component } from '@angular/core';
import { AppController } from '../../core/appController';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

  constructor(public appController: AppController) { }

}
