import { Component, OnInit } from '@angular/core';
import { AppController } from '../core/appController';
import { EstablishmentService } from './ establishment.service';

@Component({
    selector: 'app-establishment',
    templateUrl: './ establishment.component.html',
    styleUrls: ['./ establishment.component.scss'],
})
export class EstablishmentComponent implements OnInit {
    bars: any;

    constructor(public appController: AppController,
    private establishmentService: EstablishmentService) { }

    async ngOnInit() {
        // make the request to bring the list of establishments registered
        this.bars = await this.establishmentService.getAll();
    }


}
