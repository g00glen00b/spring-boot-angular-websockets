import { Injectable } from '@angular/core';
import { SocketClientService } from '../core/socket-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { DetailedAuthor } from './detailed-author';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private socketClient: SocketClientService) { }

  findOne(username: string): Observable<DetailedAuthor> {
    return this.socketClient
      .onMessage(`/topic/author/${username}/get`)
      .pipe(first());
  }
}
