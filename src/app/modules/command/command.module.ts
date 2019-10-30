import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CommandComponent } from './command.component';
import { CommandRoutingModule } from './command.routing.module';

const modules = [
  CommonModule,
  IonicModule,
  SharedModule,
  CommandRoutingModule
]

@NgModule({
  imports: [...modules],
  declarations: [CommandComponent],
  entryComponents:[],
  providers: [
  ],
})
export class CommandModule {}
