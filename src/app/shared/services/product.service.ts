import { Injectable } from '@angular/core';
import { RestService } from 'src/app/modules/core/rest.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

    constructor(private restService: RestService) { }

    public getByEstablishmentId(id_establishment: string): Promise<Object> {
        return new Promise((resolve, reject) => {
            this.restService.get('products/getByEstablishmentId', id_establishment).pipe(map(resp => resp))
                .subscribe(value => {
                    resolve(value);
                }), (err) => {
                    reject(err);
                }

            // const products = [
            //     {
            //         "title": "Mistão",
            //         "img": "assets/imgs/products/mistao-quiosque-galego.jpg",
            //         "description": "Carne mista (boi, frango, porco e calabresa), batata frita, cebola e cheddar",
            //         "price": "46,80",
            //         "establishment": "Quiosque do Galego",
            //         "id_establishment": "5dc5be21e3ae253cfdb84cfd"
            //     },
            //     {
            //         "title": "Arrumadinho Carne do Sol",
            //         "img": "assets/imgs/products/arrumadinho-quiosque-galego.jpg",
            //         "description": "Carne do sol, salada de alface, farofa e feijão verde",
            //         "price": "38,90",
            //         "establishment": "Quiosque do Galego",
            //         "id_establishment": "5dc5be21e3ae253cfdb84cfd"
            //     },
            //     {
            //         "title": "Escondidinho de Camarão",
            //         "img": "assets/imgs/products/escondidinho-camarao-quiosque-galego.jpg",
            //         "description": "Aimpim, coentro, cebola, azeitona, tomate e salsinha",
            //         "price": "39,90",
            //         "establishment": "Quiosque do Galego",
            //         "id_establishment": "5dc5be21e3ae253cfdb84cfd"
            //     },
            //     {
            //         "title": "Cerveja Devassa",
            //         "img": "assets/imgs/products/devassa-quiosque-galego.png",
            //         "description": "Cerveja Devassa 600ml",
            //         "price": "5,50",
            //         "establishment": "Quiosque do Galego",
            //         "id_establishment": "5dc5be21e3ae253cfdb84cfd"
            //     },
            //     {
            //         "title": "Cerveja Skol",
            //         "img": "assets/imgs/products/skol-puro-malte-quiosque-galego.jpg",
            //         "description": "Cerveja Skol Puro Malte 600ml",
            //         "price": "5,50",
            //         "establishment": "Quiosque do Galego",
            //         "id_establishment": "5dc5be21e3ae253cfdb84cfd"
            //     }
            // ];

            // resolve(products);
            
        });

    }



}