import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostInput } from '../post-input';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html'
})
export class CreatePostPageComponent implements OnInit, OnDestroy {
  newPost: PostInput = {title: '', content: ''};

  constructor(private titleService: Title, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('postit - Create post');
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('postit');
  }

  createPost(input: PostInput): void {
    this.postService.save({...input, authorId: 1});
    this.router.navigate(['/posts']);
  }
}
