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
        const { id_user } =  this.globalVars.getUserLoggedIn();
        return this.visitService.getByTableId(params.id_table, id_user, params.id_establishment).then(resp => resp);
    }

}