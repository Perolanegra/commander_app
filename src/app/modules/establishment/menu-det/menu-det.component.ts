import { Component, AfterViewInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AppController } from '../../core/appController';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductModel } from 'src/app/shared/models/classes/product.model';

@Component({
    selector: 'app-establishment-det-menu',
    templateUrl: './menu-det.component.html',
    styleUrls: ['./menu-det.component.scss'],
})
export class MenuDetComponent implements AfterViewInit {
    products: ProductModel;
    slideOpts;

    constructor(public appController: AppController,
    private productService: ProductService,
    private navParams: NavParams) {
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                renderCustom: (swiper, current, total) => {
                    return this.generateProgressBar(current, total);
                }
            }
        };
    }

    ngAfterViewInit(): void {
        this.getProducts(this.navParams.get('id'));
    }

    async getProducts(id: string) {
        const loader = await this.appController.presentLoadingDefault();
        this.productService.getByEstablishmentId(id).then((resp: ProductModel) => {
            this.products = resp;
        }).finally(() => loader.dismiss());
    }

    private generateProgressBar(current: number, total: number): string {
        const ratio: number = current / total;

        const progressBarStyle: string = 'style=\'transform: translate3d(0px, 0px, 0px) scaleX(' + ratio + ') scaleY(1); transition-duration: 300ms;\'';
        const progressBar: string = '<span class=\'swiper-pagination-progressbar-fill\' ' + progressBarStyle + '></span>';

        let progressBarContainer: string = '<div class=\'swiper-pagination-progressbar\' style=\'height: 4px; top: 6px; width: 100%;\'>';
        progressBarContainer += progressBar;
        progressBarContainer += '</span></div>';

        return progressBarContainer;
    }

}
