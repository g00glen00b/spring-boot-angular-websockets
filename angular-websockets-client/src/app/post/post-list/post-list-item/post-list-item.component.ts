import { Component, Input } from '@angular/core';
import { PostListing } from '../../post-listing';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {
  @Input()
  post: PostListing;

  constructor() { }
}
