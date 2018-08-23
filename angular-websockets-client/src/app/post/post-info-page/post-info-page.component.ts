import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { map, share, switchMap } from 'rxjs/operators';
import { PostInfo } from '../post-info';
import { CommentService } from '../../comment/comment.service';
import { Observable } from 'rxjs/internal/Observable';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-info-page',
  templateUrl: './post-info-page.component.html'
})
export class PostInfoPageComponent implements OnInit, OnDestroy {
  post: PostInfo;
  newComment: string;

  constructor(private service: PostService, private commentService: CommentService, private activatedRoute: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    const postId: Observable<number> = this.activatedRoute.params.pipe(map(params => params['id']));
    postId.pipe(share(), switchMap(id => this.commentService.onComment(id))).subscribe(comment => this.post.comments.push(comment));
    postId.pipe(share(), switchMap(id => this.service.findOne(id))).subscribe(post => {
      this.post = post;
      this.titleService.setTitle(`postit - ${post.title}`);
    });
  }

  addComment(content: string) {
    this.commentService.addComment(this.post.id, {content, author: {id: 1}});
    this.newComment = '';
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('postit');
  }

}
