import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  user: User

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params)
      this.user = this.router.getCurrentNavigation()?.extras.state as User
      console.log(this.user);
    })
  }


}
