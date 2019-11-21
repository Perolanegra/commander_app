import { Injectable } from '@angular/core';
import { ResolverDefault } from './resolverDefault.service';
import { CommandService } from 'src/app/modules/command/command.service';


@Injectable()
export class GetCommandClosedByUserIdResolver extends ResolverDefault {
    
    constructor(private commandService: CommandService) { 
        super();
    }
    
    resolver(params: any) {
        return this.commandService.getClosedByUserId(params._id).then(resp => resp);
    }

}