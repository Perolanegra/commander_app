import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaskDirective } from './directives/appMask.directive';
import { AutofocusDirective } from './directives/autoFocus.directive';
import { MaterialModule } from './material/material.module';
import { GlobalVars } from './globalVars';
import { DialogConfirmComponent } from './dialogs/dialogConfirmacao/dialogConfirm.component';
import { IonicModule } from '@ionic/angular';

const modules = [
    CommonModule,
    IonicModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    // MatAutocompleteModule,
]
@NgModule({
    imports: [
        ...modules
        // MatAutocompleteModule,
        // MatTooltipModule,
        // NgxMaskModule.forRoot(),
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        AppMaskDirective,
        AutofocusDirective,
        DialogConfirmComponent
    ],  
    exports: [ 
        ...modules,
        AppMaskDirective,
        AutofocusDirective
        // NgxMaskModule,
    ],
    providers:[
        GlobalVars
        // DynamicDatabase,
        // DynamicDataSource
    ]
})
export class SharedModule { }
