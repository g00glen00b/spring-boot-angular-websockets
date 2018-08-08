import { Component, Input } from '@angular/core';
import { PostInfo } from '../post-info';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent {
  @Input()
  post: PostInfo;

  constructor() { }
}
