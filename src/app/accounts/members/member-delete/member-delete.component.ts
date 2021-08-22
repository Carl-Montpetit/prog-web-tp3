import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-member-delete',
  templateUrl: './member-delete.component.html',
  styleUrls: ['./member-delete.component.css']
})
export class MemberDeleteComponent implements OnInit {

  constructor(public memberService: MembersService) { }

  ngOnInit(): void {
  }

}
