import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {DeactivatorService} from "./services/deactivator.service";
import { CommentsComponent } from './components/comments/comments.component';
import {ResolveService} from "./services/resolve.service";

let routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent,
    children: [{path:':id', component: UserDetailsComponent}
    ]
  },
  {path: 'posts', component: PostsComponent, canDeactivate: [DeactivatorService]},
  {path: 'posts/:id', component: PostDetailsComponent, canActivate: [DeactivatorService]},


  {path: 'comments', component: CommentsComponent, resolve: {data: ResolveService}}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
