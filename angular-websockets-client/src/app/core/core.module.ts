import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryNavigationComponent } from './primary-navigation/primary-navigation.component';
import { RouterModule } from '@angular/router';
import { HumanReadableDateComponent } from './human-readable-date/human-readable-date.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PrimaryNavigationComponent, HumanReadableDateComponent, ErrorHandlerComponent],
  exports: [PrimaryNavigationComponent, HumanReadableDateComponent, ErrorHandlerComponent]
})
export class CoreModule { }
