import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html'
})
export class CreateCommentComponent implements OnChanges {
  content: FormControl = new FormControl('', Validators.required);
  @Input()
  comment: string;
  @Output()
  onComment: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }


  ngOnChanges() {
    this.content.setValue(this.comment);
  }

  addComment() {
    this.onComment.emit(this.content.value);
  }
}
