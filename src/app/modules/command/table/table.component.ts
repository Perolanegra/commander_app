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

  /**Para esta tela, vou precisar obter os dados que hoje eu 
   * obtenho pelo localStorage, pela requisição, e verificar alguma var q tb vai estar no banco
   * indicando que a mesa ainda está ativa, isso antes do cara ler o QRCode
   * quando ele entrar no componente da comanda, ele ja faz a requisição para obter a mesa até o momento,
   * e passa esse cara como input para esse componente aqui.
   */

  ngOnInit() {
    // console.log('items table: ', this.itemsTable);    
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
