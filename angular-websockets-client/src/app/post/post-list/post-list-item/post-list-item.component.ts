import { Component, Input } from '@angular/core';
import { PostListing } from '../../post-listing';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html'
})
export class PostListItemComponent {
  @Input()
  post: PostListing;

  constructor() { }
}
