import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services";
import {Post} from "../../models";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[]

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value)
  }

}
