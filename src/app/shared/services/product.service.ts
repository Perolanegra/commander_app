import { Injectable } from '@angular/core';
import { RestService } from 'src/app/modules/core/rest.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

    constructor(private restService: RestService) { }

    public getByEstablishmentId(id_establishment: string): Promise<Object> {
        return new Promise((resolve, reject) => {
            this.restService.get('products/getByEstablishmentId', {id_establishment}).pipe(map(resp => resp))
                .subscribe(value => {
                    resolve(value);
                }), (err) => {
                    reject(err);
                }            
        });

    }

    public getByVisitId(id_visit: string): Promise<Object> {
        return new Promise((resolve, reject) => {
            this.restService.get('products/getByVisitId', {id_visit}).pipe(map(resp => resp))
                .subscribe(value => {
                    resolve(value);
                }), (err) => {
                    reject(err);
                }            
        });

    }



}