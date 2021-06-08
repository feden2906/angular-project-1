import {Component, Input} from '@angular/core';
import {User} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: User;

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }


  goToDetails(): void {
    // console.log(this.user)
    this.router.navigate([this.user.id], {relativeTo: this.activateRoute, state: this.user})
  }

}
