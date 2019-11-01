import { Injectable } from "@angular/core";
import { ResolverDefault } from './resolverDefault.service';
import { ProductService } from './product.service';

@Injectable()
export class GetProductsByIdResolver extends ResolverDefault {
    
    constructor(private productService: ProductService) { 
        super();
    }
    
    resolver(pParams: any) {
        return this.productService.getById(pParams.id).then(resp => resp);
    }

}