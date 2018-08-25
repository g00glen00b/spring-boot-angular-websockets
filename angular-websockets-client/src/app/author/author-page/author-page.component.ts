import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../../post/post.service';
import { AuthorService } from '../author.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { map, share, switchMap, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { DetailedAuthor } from '../detailed-author';
import { PostListing } from '../../post/post-listing';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html'
})
export class AuthorPageComponent implements OnInit, OnDestroy {
  author: DetailedAuthor;
  posts: PostListing[];
  private unsubscribeSubject: Subject<void> = new Subject<void>();

  constructor(private postService: PostService, private authorService: AuthorService, private activatedRoute: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    console.log('Initialize');
    const usernameObservable: Observable<string> = this.activatedRoute.params.pipe(map(params => params['username']));
    usernameObservable
      .pipe(share(), switchMap(username => this.authorService.findOne(username)), takeUntil(this.unsubscribeSubject))
      .subscribe(author => {
        this.author = author;
        this.titleService.setTitle(`postit - Profile of ${author.username}`);
      });
    usernameObservable
      .pipe(
        share(),
        switchMap(username => this.postService.findByAuthor(username)),
        map(posts => posts.sort(AuthorPageComponent.descendingByPostedAt)),
        takeUntil(this.unsubscribeSubject))
      .subscribe(posts => this.posts = posts);
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
    this.titleService.setTitle('postit');
  }

  static descendingByPostedAt(post1: PostListing, post2: PostListing): number {
    return post2.postedAt.getTime() - post1.postedAt.getTime();
  }
}
