import { Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../models";
import {PostsService} from "../../services";



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  post: Post

  constructor(
    private postService: PostsService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.postService.getPost(params.id).subscribe(value => this.post = value);
    })
  }

}
