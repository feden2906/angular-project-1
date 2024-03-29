import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User [] = [];

  constructor(private usersService : UsersService) {

  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => {
      this.users = value
    });
  }

}
