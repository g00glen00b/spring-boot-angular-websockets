import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryNavigationComponent } from './primary-navigation/primary-navigation.component';
import { RouterModule } from '@angular/router';
import { HumanReadableDateComponent } from './human-readable-date/human-readable-date.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PrimaryNavigationComponent, HumanReadableDateComponent],
  exports: [PrimaryNavigationComponent, HumanReadableDateComponent]
})
export class CoreModule { }
