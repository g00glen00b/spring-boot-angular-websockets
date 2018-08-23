import { Injectable } from '@angular/core';
import { SocketClientService } from '../core/socket-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { Comment } from './comment';
import { CommentInput } from './comment-input';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private socketClient: SocketClientService) {
  }

  save(postId: number, comment: CommentInput): void {
    this.socketClient.send(`/topic/posts/${postId}/comment/create`, comment);
  }

  onComment(postId: number): Observable<Comment> {
    return this.socketClient.onMessage(`/topic/posts/${postId}/created`);
  }
}
