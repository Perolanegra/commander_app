import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommandComponent } from './command.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const modules = [
  CommonModule,
  IonicModule,
  SharedModule,
];
@NgModule({
  imports: [...modules],
  declarations: [CommandComponent],
  entryComponents:[],
  providers: [
    
  ],
})
export class CommandModule {}
