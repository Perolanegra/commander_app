import { Component, OnInit, Input } from '@angular/core';
import { AppController } from '../../core/appController';
import { GlobalVars } from 'src/app/shared/globalVars';
import { ModalController, NavController } from '@ionic/angular';
import { ModalCheckoutComponent } from './modal-checkout/modal-checkout.component';
import { ActivatedRoute } from '@angular/router';
import { VisitService } from '../../core/visit.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../command.component.scss'],
})
export class TableComponent {
  btnPaymentActive: boolean = false;
  textPaymentBtn: string = 'Pagar';
  @Input() productsAdded;

  constructor(public appController: AppController,
  private globalVars: GlobalVars,
  private navCtrl: NavController,
  protected route: ActivatedRoute,
  private visitService: VisitService,
  public modalCtrl: ModalController) { 
    
  }

  public get itemsTable(): Array<any> {
    return this.productsAdded;
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
        const loader = await this.appController.presentLoadingDefault();
        try {
          await this.visitService.closeByIdTable(this.route.snapshot.queryParams.table_id);
        } catch (e) {
          this.appController.showError(e);
        } finally {
          loader.dismiss();
          loader.onDidDismiss().then(() => {
            this.appController.presentAlertInfo('Comanda Encerrada', 'Curtiu o nosso app ?<br> Aqui você comanda! <br> Te vejo em breveee =)', 'Valeeeu', 'align-text-alert-info');
            this.navCtrl.navigateRoot('home');
          });
        }
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
