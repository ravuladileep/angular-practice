import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezoneComponent } from './timezone/timezone.component';
import { Routes, RouterModule } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: TimezoneComponent}
];

@NgModule({
  declarations: [TimezoneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule
  ]
})
export class TimeZoneModule { }
