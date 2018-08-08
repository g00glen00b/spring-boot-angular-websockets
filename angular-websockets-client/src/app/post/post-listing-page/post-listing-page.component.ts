import { Component, OnInit } from '@angular/core';
import { PostListing } from '../post-listing';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-listing-page',
  templateUrl: './post-listing-page.component.html',
  styleUrls: ['./post-listing-page.component.css']
})
export class PostListingPageComponent implements OnInit {
  posts: PostListing[];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(posts => this.posts = posts);
  }
}
