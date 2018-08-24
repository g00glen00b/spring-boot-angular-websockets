import { Component, Input } from '@angular/core';
import { DetailedAuthor } from '../detailed-author';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html'
})
export class AuthorInfoComponent {
  @Input()
  author: DetailedAuthor;
}
