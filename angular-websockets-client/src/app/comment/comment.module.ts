import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentListItemComponent } from './comment-list/comment-list-item/comment-list-item.component';
import { CoreModule } from '../core/core.module';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CommentListComponent, CommentListItemComponent, CommentFormComponent],
  exports: [CommentListComponent, CommentFormComponent]
})
export class CommentModule { }
