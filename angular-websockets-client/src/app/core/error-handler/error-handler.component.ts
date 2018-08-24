import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html'
})
export class ErrorHandlerComponent implements OnInit, OnDestroy {
  message: string;
  private errorSubscription: Subscription;

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorSubscription = this.errorService.onError().subscribe(message => this.message = message);
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

  clear(event: Event) {
    this.message = null;
    event.preventDefault();
  }
}
