import { Injectable } from "@angular/core";
import { ResolverDefault } from './resolverDefault.service';
import { ProductService } from './product.service';

@Injectable()
export class GetProductsByIdResolver extends ResolverDefault {
    
    constructor(private productService: ProductService) { 
        super();
    }
    
    resolver(params: any) {
        return this.productService.getByEstablishmentId(params.id_establishment).then(resp => resp);
    }

}