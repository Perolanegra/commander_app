import {
    MatCheckboxModule, MatDialogModule, MatIconModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef,
    MAT_DIALOG_DATA, MAT_DATE_LOCALE, MAT_CHIPS_DEFAULT_OPTIONS, MAT_DATE_FORMATS,
    DateAdapter, MatFormFieldModule, MatInputModule, MatRippleModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY'
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MM YYYY',
        dateA11yLabel: 'DD/MM/YYYY'
    }
};
const modules = [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    // MatProgressSpinnerModule,
    // MatSortModule,
    // MatSelectModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatChipsModule,
    // MatDividerModule,
    // CdkTreeModule,
    // MatTreeModule,
    // MatProgressBarModule,
    // MatMenuModule,
    // MatListModule,
    // MatButtonModule, 
    // MatToolbarModule,
    // MatSidenavModule,
];
@NgModule({
    imports: [...modules],
    exports: [...modules],
    providers: [
        { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        { provide: MAT_CHIPS_DEFAULT_OPTIONS, useValue: { separatorKeyCodes: [ENTER, COMMA] } },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }
    ]
})
export class MaterialModule { }
