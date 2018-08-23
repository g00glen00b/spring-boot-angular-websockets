import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostInput } from '../post-input';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent implements OnChanges {
  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  });

  @Input()
  post: PostInput;
  @Output()
  onPost: EventEmitter<PostInput> = new EventEmitter<PostInput>();

  constructor(private fb: FormBuilder) { }

  ngOnChanges(): void {
    this.form.controls.title.setValue(this.post.title);
    this.form.controls.content.setValue(this.post.content);
  }

  onSubmit(): void {
    this.onPost.emit({title: this.form.controls.title.value, content: this.form.controls.content.value});
  }

}
