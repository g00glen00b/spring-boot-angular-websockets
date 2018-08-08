import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { PostInfo } from '../post-info';

@Component({
  selector: 'app-post-info-page',
  templateUrl: './post-info-page.component.html',
  styleUrls: ['./post-info-page.component.css']
})
export class PostInfoPageComponent implements OnInit {
  post: PostInfo;

  constructor(private service: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(map(params => params['id']), switchMap(id => this.service.findOne(id)))
      .subscribe(postInfo => this.post = postInfo);
  }

}
