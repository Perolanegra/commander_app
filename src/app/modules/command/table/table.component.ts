import { Component, OnInit, Input } from '@angular/core';
import { AppController } from '../../core/appController';
import { GlobalVars } from 'src/app/shared/globalVars';
import { ModalController, NavController } from '@ionic/angular';
import { ModalCheckoutComponent } from './modal-checkout/modal-checkout.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../command.component.scss'],
})
export class TableComponent {
  btnPaymentActive: boolean = false;
  textPaymentBtn: string = 'Pagar';
  private productsAdded;

  constructor(public appController: AppController,
  private globalVars: GlobalVars,
  private navCtrl: NavController,
  public modalCtrl: ModalController) { 
    
  }

  public get itemsTable(): Array<any> {
    return this.productsAdded;
  }

  public set itemsTable(items) {
    this.productsAdded = items;
  }

  addedProducts(products) { // emitido quando o cara adiciona novos pedidos.
    this.itemsTable = products;
  }

  reloadProductRequest(products) { // emitido quando o cara swita pra table e tem comanda.
    this.itemsTable = products;
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

    modal.onWillDismiss().then(async (resp) => {
      if(resp.data) {
        // Faço uma requisição mandando pro banco o método de pagamento escolhido.
        this.textPaymentBtn = 'Pagamento Solicitado';
        const customLoader = await this.appController.presentCustomLoading('Aguardando Confirmação...', 2500);
        customLoader.onWillDismiss().then(() => {

          // requisição para encerrar a comanda.

          this.appController.presentAlertInfo('Comanda Encerrada', 'Curtiu o nosso app ?<br> Aqui você comanda! <br> Te vejo em breveee =)', 'Valeeeu', 'align-text-alert-info');
          localStorage.removeItem('tableProducts');
          this.navCtrl.navigateRoot('home');
        });
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
