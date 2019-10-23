import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../shared/user.service";
import {User} from "./User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService){
  }
  users: User[];

  @Input()
  styleee : string;


  getUsers():void {
    this.userService.getUsers()
      .subscribe(users => this.users = users );
  }

  ngOnInit() {
    this.getUsers();
  }

}
