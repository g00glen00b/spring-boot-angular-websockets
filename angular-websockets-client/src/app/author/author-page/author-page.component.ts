import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../../post/post.service';
import { AuthorService } from '../author.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { map, share, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { DetailedAuthor } from '../detailed-author';
import { Subscription } from 'rxjs/internal/Subscription';
import { PostListing } from '../../post/post-listing';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html'
})
export class AuthorPageComponent implements OnInit, OnDestroy {
  author: DetailedAuthor;
  posts: PostListing[];
  private findOneSubscription: Subscription;
  private findPostsSubscription: Subscription;

  constructor(private postService: PostService, private authorService: AuthorService, private activatedRoute: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    console.log('Initialize');
    const usernameObservable: Observable<string> = this.activatedRoute.params.pipe(map(params => params['username']));
    this.findOneSubscription = usernameObservable
      .pipe(share(), switchMap(username => this.authorService.findOne(username)))
      .subscribe(author => {
        this.author = author;
        this.titleService.setTitle(`postit - Profile of ${author.username}`);
      });
    this.findPostsSubscription = usernameObservable
      .pipe(
        share(),
        switchMap(username => this.postService.findByAuthor(username)),
        map(posts => posts.sort(AuthorPageComponent.descendingByPostedAt)))
      .subscribe(posts => this.posts = posts);
  }

  ngOnDestroy(): void {
    this.findOneSubscription.unsubscribe();
    this.findPostsSubscription.unsubscribe();
    this.titleService.setTitle('postit');
  }

  static descendingByPostedAt(post1: PostListing, post2: PostListing): number {
    return post2.postedAt.getTime() - post1.postedAt.getTime();
  }
}
