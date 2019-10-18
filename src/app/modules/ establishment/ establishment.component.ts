import { Component, OnInit } from '@angular/core';
import { AppController } from '../core/appController';

@Component({
    selector: 'app-establishment',
    templateUrl: './ establishment.component.html',
    styleUrls: ['./ establishment.component.scss'],
})
export class EstablishmentComponent implements OnInit {
    rating: string = '4.5';

    constructor(public appController: AppController) { }

    ngOnInit() {
        // make the request to bring the list of establishments registered
        // this.establishmentService.getAll();
    }


}
