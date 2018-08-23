import { Component, Input } from '@angular/core';
import { PostListing } from '../post-listing';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {
  @Input()
  posts: PostListing[];

  constructor() { }
}
