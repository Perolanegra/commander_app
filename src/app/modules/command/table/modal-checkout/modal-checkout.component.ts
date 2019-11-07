import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
    selector: 'app-modal-checkout',
    templateUrl: './modal-checkout.component.html',
    styleUrls: ['./modal-checkout.component.scss']
})
export class ModalCheckoutComponent implements OnInit {
    chosenPaymentMethod;
    total: Number;

    constructor(private navParams: NavParams, private modalCtrl: ModalController,) { }

    ngOnInit() {
        this.total = this.navParams.get('total');
    }

    public get paymentMethods() {
        return [
            {
                method: 'PagSeguro',
                value: 1
            },
            {
                method: 'PayPal',
                value: 2
            },
            {
                method: 'Apple Pay',
                value: 3
            },
            {
                method: 'Mercado Pago',
                value: 4
            },
            {
                method: 'Débito',
                value: 5
            },
            {
                method: 'Crédito',
                value: 6
            },
            {
                method: 'Dinheiro',
                value: 7
            }
        ];
    }

    selectMethod(event) {
        const [{ method }] = this.paymentMethods.filter(val => val.value == event.target.value);
        this.chosenPaymentMethod = method;
    }

}
