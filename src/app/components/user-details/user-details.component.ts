import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => {
      // console.log(params)
      this.user = this.router.getCurrentNavigation()?.extras.state as User
      console.log(this.user);
    })


  }

  ngOnInit(): void {
    console.log(history.state)
  }

}
