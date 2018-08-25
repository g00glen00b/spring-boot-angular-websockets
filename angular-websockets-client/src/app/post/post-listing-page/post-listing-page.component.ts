import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostListing } from '../post-listing';
import { PostService } from '../post.service';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-post-listing-page',
  templateUrl: './post-listing-page.component.html'
})
export class PostListingPageComponent implements OnInit, OnDestroy {
  posts: PostListing[];
  private unsubscribeSubject: Subject<void> = new Subject<void>();

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service
      .findAll()
      .pipe(map(posts => posts.sort(PostListingPageComponent.descendingByPostedAt)), takeUntil(this.unsubscribeSubject))
      .subscribe(posts => this.posts = posts);
    this.service
      .onPost()
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(post => {
        this.posts.push(post);
        this.posts.sort(PostListingPageComponent.descendingByPostedAt);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  static descendingByPostedAt(post1: PostListing, post2: PostListing): number {
    return post2.postedAt.getTime() - post1.postedAt.getTime();
  }
}
