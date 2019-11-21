import { Component } from '@angular/core';
import { AppController } from '../../core/appController';
import { ModalController, NavParams } from '@ionic/angular';
import { MenuDetComponent } from '../menu-det/menu-det.component';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductModel } from 'src/app/shared/models/classes/product.model';

@Component({
    selector: 'app-establishment-det',
    templateUrl: './establishment-det.component.html',
    styleUrls: ['./establishment-det.component.scss'],
})
export class EstablishmentDetComponent {
    bar;

    constructor(public appController: AppController,
    private navParams: NavParams,
    private productService: ProductService,
    public modalCtrl: ModalController) {
        this.bar = this.navParams.get('bar');        
    }

    async pushToMenuDetails(id: string) {

        const products: ProductModel = await this.getProducts(id);
        
        if(products['length']) {
            const modal = await this.modalCtrl.create({
                component: MenuDetComponent,
                componentProps: {
                    "products": products
                },
                cssClass: 'modal-center'
            });
    
            modal.present();
            return;
        }

        this.appController.showWarning('Ainda não existem produtos cadastrados para o estabelecimento.');
    }

    async getProducts(id: string): Promise<ProductModel> {
        return await this.productService.getByEstablishmentId(id).then((resp: ProductModel) => resp);
    }

}
