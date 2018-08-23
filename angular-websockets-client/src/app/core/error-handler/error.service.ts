import { Injectable } from '@angular/core';
import { SocketClientService } from '../socket-client.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private socketClient: SocketClientService) { }

  onError(): Observable<string> {
    return this.socketClient.onPlainMessage('/user/topic/error');
  }
}
