import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostListing } from '../post-listing';
import { PostService } from '../post.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-post-listing-page',
  templateUrl: './post-listing-page.component.html'
})
export class PostListingPageComponent implements OnInit, OnDestroy {
  posts: PostListing[];
  findAllSubscription: Subscription;
  postSubscription: Subscription;

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.findAllSubscription = this.service
      .findAll()
      .pipe(map(posts => posts.sort(PostListingPageComponent.descendingByPostedAt)))
      .subscribe(posts => this.posts = posts);
    this.postSubscription = this.service
      .onPost()
      .subscribe(post => {
        this.posts.push(post);
        this.posts.sort(PostListingPageComponent.descendingByPostedAt);
      });
  }

  ngOnDestroy(): void {
    this.findAllSubscription.unsubscribe();
    this.postSubscription.unsubscribe();
  }

  static descendingByPostedAt(post1: PostListing, post2: PostListing): number {
    return post2.postedAt.getTime() - post1.postedAt.getTime();
  }
}
