import { Component, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-confirm-modal',
  templateUrl: './dialogConfirm.component.html',
  styleUrls: ['./dialogConfirm.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class DialogConfirmComponent {

  constructor(public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  cancel(): void {
    this.dialogRef.close();
  }

  confirm(pConfirmParam): void {
    this.dialogRef.close(pConfirmParam);
  }

}