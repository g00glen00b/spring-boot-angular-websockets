import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListingPageComponent } from './post-listing-page/post-listing-page.component';
import { PostInfoPageComponent } from './post-info-page/post-info-page.component';
import { Route, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { CoreModule } from '../core/core.module';
import { PostInfoComponent } from './post-info/post-info.component';
import { CommentModule } from '../comment/comment.module';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {path: 'posts', component: PostListingPageComponent},
  {path: 'posts/:id', component: PostInfoPageComponent},
  {path: 'create-post', component: CreatePostPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CommentModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PostListingPageComponent, PostInfoPageComponent, PostListComponent, PostListItemComponent, CreatePostPageComponent, PostInfoComponent, PostFormComponent],
  exports: [PostListComponent]
})
export class PostModule { }
