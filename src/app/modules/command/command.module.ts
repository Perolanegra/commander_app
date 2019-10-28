import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommandComponent } from './command.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CommandComponent],
  entryComponents:[],
  providers: [
    
  ],
})
export class CommandModule {}
