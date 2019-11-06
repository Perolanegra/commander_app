import { Component, OnInit } from '@angular/core';
import { AppController } from '../../core/appController';
import { GlobalVars } from 'src/app/shared/globalVars';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../command.component.scss'],
})
export class TableComponent implements OnInit {
  btnPaymentActive: boolean = false;

  constructor(public appController: AppController,
  private globalVars: GlobalVars) { 
    
  }

  ngOnInit() {
    console.log('items table: ', this.itemsTable);    
  }

  public get itemsTable() {
    return this.appController.getTableStorage();
  }

  public get currentUsername() {
    return this.globalVars.getUserLoggedIn().name;
  }

  checkout() {
    console.log('implementar lógica que faz pagamento');
    // leva o cara pra tela de pagamento
  }

}
