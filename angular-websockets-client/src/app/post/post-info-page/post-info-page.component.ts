import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { map, share, switchMap } from 'rxjs/operators';
import { PostInfo } from '../post-info';
import { CommentService } from '../../comment/comment.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-post-info-page',
  templateUrl: './post-info-page.component.html'
})
export class PostInfoPageComponent implements OnInit {
  post: PostInfo;
  newComment: string;

  constructor(private service: PostService, private commentService: CommentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const postId: Observable<number> = this.activatedRoute.params.pipe(map(params => params['id']));
    postId.pipe(share(), switchMap(id => this.commentService.onComment(id))).subscribe(comment => this.post.comments.push(comment));
    postId.pipe(share(), switchMap(id => this.service.findOne(id))).subscribe(post => this.post = post);
  }

  addComment(content: string) {
    this.commentService.addComment(this.post.id, {content, author: {id: 1}});
    this.newComment = '';
  }

}
