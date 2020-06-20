import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { filter } from 'rxjs/operators';
import * as fedHolidays from '@18f/us-federal-holidays';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

   options = { shiftSaturdayHolidays: true, shiftSundayHolidays: true };
  // holidays = fedHolidays.isAHoliday(new Date(' Mon May 25 2020 05:30:00 GMT+0530 (India Standard Time)'), this.options);
  // holidays = fedHolidays.allForYear();
  holidays = fedHolidays.isAHoliday( new Date(new Date('Sat Jul 04 2020 05:30:00').toLocaleString('en-US', {timeZone: 'America/New_York'})), this.options);
  title = 'angular-practice';
  restaurantsData = [];
  // google maps zoom level
  zoom = 15;

  // initial center position for the map
  lat = 18.882938833121145;
  lng = 79.44283051630443;

  map: any;
  line: any;
  directionsService: any;

  constructor(private appService: AppService) {}
  ngOnInit(): void {
     this.getNearByRestaurants();
     console.log(this.holidays);
  }

  public getNearByRestaurants(): void {
    this.appService
      .getRestaurants()
      .subscribe((res) => this.restaurantsData = res.results);
  }
  public placeMarker($event): void {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    console.log($event.coords.lat);
    console.log($event.coords.lng);
  }
}
