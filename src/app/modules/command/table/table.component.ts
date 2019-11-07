import { Component, OnInit } from '@angular/core';
import { AppController } from '../../core/appController';
import { GlobalVars } from 'src/app/shared/globalVars';
import { ModalController } from '@ionic/angular';
import { ModalCheckoutComponent } from './modal-checkout/modal-checkout.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../command.component.scss'],
})
export class TableComponent implements OnInit {
  btnPaymentActive: boolean = false;

  constructor(public appController: AppController,
  private globalVars: GlobalVars,
  public modalCtrl: ModalController) { 
    
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

  async presentModalCheckout() { // abre modal-footer com formas de pagamento
    const modal = await this.modalCtrl.create({
      component: ModalCheckoutComponent,
      componentProps: {
        'total': this.total
      },
      cssClass: 'modal-footer',
    });

    await modal.present();

    modal.onWillDismiss().then(resp => {
      if(resp) {
        this.appController.presentCustomLoading('Aguardando Confirmação...');
        console.log('método escolido, log na tab de Table: ', resp);
      }
    });
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
