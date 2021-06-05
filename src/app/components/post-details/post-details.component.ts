import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post

  constructor(
    private postDervice : PostsService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.postDervice.getPost(params.id).subscribe(value => this.post = value);
    })
  }

  ngOnInit(): void {
  }

}
