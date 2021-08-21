import { ProgramsService } from 'src/app/programs/programs.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MembersService } from '../accounts/members/members.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  public selectedChild = '';

  constructor(
    public programService: ProgramsService,
    public memberService: MembersService,
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  selectChangeHandler (event: any) {
    this.selectedChild = event.target.value;
  }
  
  closePopup() {
    this.dialogRef.close();
  }

}
