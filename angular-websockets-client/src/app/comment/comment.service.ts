import { Injectable } from '@angular/core';
import { SocketClientService } from '../core/socket-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private socketClient: SocketClientService) {
  }

  addComment(postId: number, comment: Comment): void {
    this.socketClient.send(`/topic/posts/${postId}/comment`, comment);
  }

  onComment(postId: number): Observable<Comment> {
    return this.socketClient.onMessage(`/topic/posts/${postId}/new-comment`);
  }
}
