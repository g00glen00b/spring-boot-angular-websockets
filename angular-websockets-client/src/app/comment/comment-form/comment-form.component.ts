import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html'
})
export class CommentFormComponent implements OnChanges {
  content: FormControl = new FormControl('', Validators.required);
  @Input()
  comment: string;
  @Output()
  onComment: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }


  ngOnChanges(): void {
    this.content.setValue(this.comment);
  }

  onSubmit(): void {
    this.onComment.emit(this.content.value);
  }
}
