import { Component, Input, OnInit } from '@angular/core';
import { AppController } from '../../core/appController';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  constructor(public appController: AppController) { 
    
  }

  ngOnInit() {
    console.log('items table: ', this.itemsTable);
    
  }

  public get itemsTable() {
    return JSON.parse(localStorage.getItem('tableProducts'));
  }

}
