import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { RestService } from 'src/app/modules/core/rest.service';

@Injectable()
export class ProductService {

    constructor(private restService: RestService) { }

    public getById(_id: string): Promise<Object> {
        return new Promise((resolve, reject) => {

            const products = [
                {
                    "title": 'Mistão',
                    "img": 'https://rechlanches.com.br/wp-content/uploads/2017/06/mist%C3%A3o-rechlanches-joinville.jpg',
                    "description": 'Carne mista (boi, frango, porco e calabresa), batata frita, cebola e cheddar',
                    "price": '46,80',
                    "establishment": 'Quiosque do Galego',
                    "id_establishment": '1'
                },
                {
                    "title": 'Arrumadinho Carne do Sol',
                    "img": 'https://media-cdn.tripadvisor.com/media/photo-s/11/04/42/e0/arrumadinho-de-carne.jpg',
                    "description": 'Carne do sol, salada de alface, farofa e feijão verde',
                    "price": '38,90',
                    "establishment": 'Quiosque do Galego',
                    "id_establishment": '1'
                },
                {
                    "title": 'Escondidinho de Camarão',
                    "img": 'https://www.destaquesp.com/wp-content/uploads/2008/11/receita-escondidinho-de-camarao.jpg',
                    "description": 'Aimpim, coentro, cebola, azeitona, tomate e salsinha',
                    "price": '39,90',
                    "establishment": 'Quiosque do Galego',
                    "id_establishment": '1'
                },
            ];

            resolve(products);
            // this.restService.get('products', _id).pipe(map(resp => resp))
            // .subscribe(value => {
            //     resolve(value); // colchetes por enquanto
            // }), (err) => {
            //     reject(err);
            // }
        });

    }



}