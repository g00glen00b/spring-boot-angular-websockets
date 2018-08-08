import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client, over, StompSubscription } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class SocketClientService {

  constructor() { }

  connect(destination: string): Observable<Client> {
    return new Observable<Client>(observer => {
      const client: Client = over(new SockJS(destination));
      client.connect({}, () => {
        observer.next(client);
      });
      return () => client.disconnect(null);
    });
  }

  onMessage(client: Client, topic: string): Observable<any> {
    return new Observable<any>(observer => {
      const subscription: StompSubscription = client.subscribe(topic, message => {
        observer.next(JSON.parse(message.body));
      });
      return () => client.unsubscribe(subscription.id);
    });
  }
}
