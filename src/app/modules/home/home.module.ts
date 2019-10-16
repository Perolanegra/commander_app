import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  entryComponents:[]
})
export class HomeModule {}
