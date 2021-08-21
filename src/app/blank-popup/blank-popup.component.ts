import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-blank-popup',
  templateUrl: './blank-popup.component.html',
  styleUrls: ['./blank-popup.component.css']
})
export class BlankPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BlankPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }
  
  isEmpty() {
    return Object.keys(this.data.button).length = 0;
  }

}
