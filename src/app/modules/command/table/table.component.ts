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

  /** Antes de validar o QRCode, fazer uma requisição para saber se a mesa está ativa,
   * caso esteja, eu obtenho em outra requisição, já dentro do componente comanda os itens pedidos da mesa,
   * que são persistidos toda vez que o cara adiciona um item a mesa.
   * Caso a mesa n esteja ativa, eu n realizo requisição pra buscar itens da mesa.
   */

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
    const alert = await this.appController.presentAlertConfirm('Efetuar Pagamento', 'Deseja finalizar a mesa e realizar pagamento?');
    if(alert) { // leva o cara pra tela de pagamento

    }
  }

  public get total() {
    let total: number = 0;
    if(this.itemsTable) {
      this.itemsTable.forEach(item => {
        total += (Number(item['qtd']) * Number(item['price'].replace(",", ".")));
      });
    }
    
    return total;
  }

}
