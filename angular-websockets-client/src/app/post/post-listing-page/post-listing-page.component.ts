import { Component, OnInit } from '@angular/core';
import { PostListing } from '../post-listing';
import { PostService } from '../post.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-listing-page',
  templateUrl: './post-listing-page.component.html'
})
export class PostListingPageComponent implements OnInit {
  posts: PostListing[];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service
      .findAll()
      .pipe(map(posts => posts.sort(this.descendingByPostedAt)))
      .subscribe(posts => this.posts = posts);
  }

  descendingByPostedAt(post1: PostListing, post2: PostListing) {
    return post2.postedAt.getTime() - post1.postedAt.getTime();
  }
}
