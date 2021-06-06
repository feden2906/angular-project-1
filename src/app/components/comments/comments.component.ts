import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.data.subscribe(value => console.log(value))
  }

  ngOnInit(): void {
  }

}
