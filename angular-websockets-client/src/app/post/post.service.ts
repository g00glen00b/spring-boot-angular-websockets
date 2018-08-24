import { Injectable } from '@angular/core';
import { SocketClientService } from '../core/socket-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '@stomp/stompjs';
import { environment } from '../../environments/environment';
import { PostListing } from './post-listing';
import { first, map, switchMap } from 'rxjs/operators';
import { PostInfo } from './post-info';
import { PostInput } from './post-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private socketClient: SocketClientService) {
  }

  findAll(): Observable<PostListing[]> {
    return this.socketClient
      .onMessage('/topic/posts/get')
      .pipe(first(), map(posts => posts.map(PostService.getPostListing)));
  }

  findOne(id: number): Observable<PostInfo> {
    return this.socketClient
      .onMessage(`/topic/posts/${id}/get`)
      .pipe(first(), map(post => PostService.getPostInfo(post)));
  }

  findByAuthor(username: string): Observable<PostListing[]> {
    return this.socketClient
      .onMessage(`/topic/author/${username}/posts/get`)
      .pipe(first(), map(posts => posts.map(PostService.getPostListing)));
  }

  save(post: PostInput) {
    return this.socketClient.send('/topic/posts/create', post);
  }

  onPost(): Observable<PostListing> {
    return this.socketClient.onMessage('/topic/posts/created').pipe(map(post => PostService.getPostListing(post)));
  }

  static getPostListing(post: any): PostListing {
    const postedAt = new Date(post['postedAt']);
    return {...post, postedAt};
  }

  static getPostInfo(post: any): PostInfo {
    const postedAt = new Date(post['postedAt']);
    const comments = post['comments'].map(comment => PostService.getComment(comment));
    return {...post, postedAt, comments};
  }

  static getComment(comment: any): Comment {
    const postedAt = new Date(comment['postedAt']);
    return {...comment, postedAt};
  }
}
