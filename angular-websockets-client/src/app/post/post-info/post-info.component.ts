import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { PostInfo } from '../post-info';
import { Comment } from '../../comment/comment';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html'
})
export class PostInfoComponent implements OnChanges {
  @Input()
  post: PostInfo;
  @Input()
  newComment: string;
  @Output()
  onComment: EventEmitter<string> = new EventEmitter<string>();
  comments: Comment[] = [];

  constructor() { }

  ngOnChanges(): void {
    if (this.post != null) {
      this.comments = this.post.comments.sort(PostInfoComponent.ascendingByPostedAt);
    } else {
      this.comments = [];
    }
  }

  static ascendingByPostedAt(comment1: Comment, comment2: Comment): number {
    return comment1.postedAt.getTime() - comment2.postedAt.getTime();
  }
}
