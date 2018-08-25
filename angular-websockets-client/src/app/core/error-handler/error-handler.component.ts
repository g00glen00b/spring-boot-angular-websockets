import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html'
})
export class ErrorHandlerComponent implements OnInit, OnDestroy {
  message: string;
  private unsubscribeSubject: Subject<void> = new Subject<void>();

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.onError().pipe(takeUntil(this.unsubscribeSubject)).subscribe(message => this.message = message);
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  clear(event: Event) {
    this.message = null;
    event.preventDefault();
  }
}
