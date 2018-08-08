import { Injectable } from '@angular/core';
import { SocketClientService } from '../core/socket-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '@stomp/stompjs';
import { environment } from '../../environments/environment';
import { PostListing } from './post-listing';
import { first, switchMap } from 'rxjs/operators';
import { PostInfo } from './post-info';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private client: Observable<Client>;

  constructor(private socketClient: SocketClientService) {
    this.client = socketClient.connect(environment.api);
  }

  findAll(): Observable<PostListing[]> {
    return this.client.pipe(switchMap(client => this.socketClient.onMessage(client, '/topic/posts')), first());
  }

  findOne(id: number): Observable<PostInfo> {
    return this.client.pipe(switchMap(client => this.socketClient.onMessage(client, `/topic/posts/${id}`)), first());
  }
}
