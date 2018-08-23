import { Component, Input, OnChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-human-readable-date',
  templateUrl: './human-readable-date.component.html'
})
export class HumanReadableDateComponent implements OnChanges {
  @Input()
  date: Date;
  humanReadable: string;

  constructor() { }

  ngOnChanges(): void {
    this.humanReadable = moment(this.date).fromNow();
  }

}
