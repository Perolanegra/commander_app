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

  public get itemsTable(): Array<any> {
    return this.appController.getTableStorage();
  }

  public get currentUsername() {
    return this.globalVars.getUserLoggedIn().name;
  }

  async checkout() {
    console.log('implementar lógica que faz pagamento');
    const alert = await this.appController.presentAlertConfirm('Efetuar Pagamento', 'Deseja finalizar a mesa e realizar pagamento?');
    if(alert) { // leva o cara pra tela de pagamento

    }
  }

}
