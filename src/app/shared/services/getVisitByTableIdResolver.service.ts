import { Injectable } from '@angular/core';
import { VisitService } from 'src/app/modules/core/visit.service';
import { ResolverDefault } from './resolverDefault.service';
import { GlobalVars } from '../globalVars';

@Injectable()
export class GetVisitByTableIdResolver extends ResolverDefault {
    
    constructor(private visitService: VisitService,
    private globalVars: GlobalVars) { 
        super();
    }
    
    resolver(params: any) {
        const { _id } =  this.globalVars.getUserLoggedIn();
        return this.visitService.getByTableId(params.table_id, _id).then(resp => resp);
    }

}