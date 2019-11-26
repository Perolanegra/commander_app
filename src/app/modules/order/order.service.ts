import { Injectable } from '@angular/core';
import { RestService } from '../core/rest.service';
import { map } from 'rxjs/operators';
import { ItemsModel } from 'src/app/shared/models/classes/items.model';

@Injectable()
export class OrderService {

    constructor(private restService: RestService) { }

    public store(items: Array<ItemsModel>, id_user: string, id_visit: string, id_establishment: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.restService.post('orders/store', {items, id_user, id_visit, id_establishment}).pipe(map(resp => resp))
            .subscribe(value => {
                resolve(value);
            }), (err) => {
                reject(err);
            }
        });
    }

}