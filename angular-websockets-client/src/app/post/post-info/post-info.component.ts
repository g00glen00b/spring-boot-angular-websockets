import { Component, Input, OnChanges } from '@angular/core';
import { PostInfo } from '../post-info';
import { Comment } from '../../comment/comment';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnChanges {
  @Input()
  post: PostInfo;
  comments: Comment[] = [];

  constructor() { }

  ngOnChanges(): void {
    if (this.post != null) {
      this.comments = this.post.comments.sort(this.ascendingByPostedAt);
    } else {
      this.comments = [];
    }
  }

  ascendingByPostedAt(comment1: Comment, comment2: Comment) {
    return comment1.postedAt.getTime() - comment2.postedAt.getTime();
  }
}
