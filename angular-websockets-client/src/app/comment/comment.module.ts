import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentListItemComponent } from './comment-list/comment-list-item/comment-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommentListComponent, CommentListItemComponent],
  exports: [CommentListComponent]
})
export class CommentModule { }
