import { Component, Input } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html'
})
export class CommentListComponent {
  @Input()
  comments: Comment[];

  constructor() { }
}
