import { Component, OnInit, OnChanges } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  public selectedDate: Date;
  public selectedTimeZone: Date;
  public timeZones = [];
  constructor() { }

  ngOnInit(): void {
    this.timeZone();
  }

  public timeZone(): void {
     this.timeZones = [
      {name: 'PST', time: moment(this.selectedDate).utcOffset('-08:00').format('M/DD/YYYY, hh:mm A')},
      {name: 'IST', time: moment(this.selectedDate).utcOffset('+05:30').format('M/DD/YYYY, hh:mm A')},
      {name: 'Mountain Time', time: moment(this.selectedDate).utcOffset('-07:00').format('M/DD/YYYY, hh:mm A')},
      {name: 'CST', time: moment(this.selectedDate).utcOffset('-06:00').format('M/DD/YYYY, hh:mm A' )},
    ];
  }

  public getDate(): void {
    this.timeZone();
  }

  public updateTimeZone(): void {
    console.log(this.selectedTimeZone);
    this.selectedDate = new Date(this.selectedTimeZone);
  }

}
