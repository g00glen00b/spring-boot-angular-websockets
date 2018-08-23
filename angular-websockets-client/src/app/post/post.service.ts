import { Injectable } from '@angular/core';
import { SocketClientService } from '../core/socket-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '@stomp/stompjs';
import { environment } from '../../environments/environment';
import { PostListing } from './post-listing';
import { first, map, switchMap } from 'rxjs/operators';
import { PostInfo } from './post-info';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private socketClient: SocketClientService) {
  }

  findAll(): Observable<PostListing[]> {
    return this.socketClient.onMessage('/topic/posts').pipe(first(), map(posts => posts.map(this.getPostListing)));
  }

  findOne(id: number): Observable<PostInfo> {
    return this.socketClient.onMessage(`/topic/posts/${id}`).pipe(first(), map(post => this.getPostInfo(post)));
  }

  getPostListing(post: any): PostListing {
    const postedAt = new Date(post['postedAt']);
    return {...post, postedAt};
  }

  getPostInfo(post: any): PostInfo {
    const postedAt = new Date(post['postedAt']);
    const comments = post['comments'].map(comment => this.getComment(comment));
    return {...post, postedAt, comments};
  }

  getComment(comment: any): Comment {
    const postedAt = new Date(comment['postedAt']);
    return {...comment, postedAt};
  }
}
