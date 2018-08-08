import { TestBed, inject } from '@angular/core/testing';

import { SocketClientService } from './socket-client.service';

describe('SocketClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketClientService]
    });
  });

  it('should be created', inject([SocketClientService], (service: SocketClientService) => {
    expect(service).toBeTruthy();
  }));
});
