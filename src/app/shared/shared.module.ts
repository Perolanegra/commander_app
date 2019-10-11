import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaskDirective } from './directives/appMask.directive';

@NgModule({
    imports: [
        CommonModule,
        // MaterialModule,
        RouterModule,
        ReactiveFormsModule,
        // MatAutocompleteModule,
        // MatTooltipModule,
        // NgxMaskModule.forRoot(),
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        AppMaskDirective
    ],  
    exports: [ 
        CommonModule,
        // MaterialModule,
        RouterModule,
        ReactiveFormsModule,
        // MatAutocompleteModule,
        // NgxMaskModule,
        AppMaskDirective
    ],
    providers:[
        // DynamicDatabase,
        // DynamicDataSource
    ]
})
export class SharedModule { }
