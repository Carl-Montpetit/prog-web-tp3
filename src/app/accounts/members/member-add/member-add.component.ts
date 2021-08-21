import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {
  @ViewChild('alert', {static: true}) alert: ElementRef;

  submit = false;

  newMemberForm = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfBirth: new FormControl(''),
  });

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.memberService.addNewMember(this.newMemberForm.value.firstName, this.newMemberForm.value.lastName, this.newMemberForm.value.dateOfBirth)
    this.submit = true
    return this.submit;
  }

  closeAlert() {
    this.submit = false;
    this.alert.nativeElement.classList.remove('show');
  }

}
