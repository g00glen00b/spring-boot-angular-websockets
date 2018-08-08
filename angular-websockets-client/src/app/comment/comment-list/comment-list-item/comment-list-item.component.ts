import { Component, Input } from '@angular/core';
import { Comment } from '../../comment';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.css']
})
export class CommentListItemComponent {
  @Input()
  comment: Comment;

  constructor() { }
}
