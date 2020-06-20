import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
    }),
  };
  public getRestaurants(): Observable<any> {
    return this.http.get(
    '../assets/resdata.json'
    );
  }
}


//   'https://cors-anywhere.herokuapp.com/ht
// tps://maps.googleapis.com/maps/api/place/nearbysearch/
//  json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&key=AIzaSyCyKAAu8QoYwwxJRLa4_4ZGSj0e2iVUBRA',
// this.httpOptions
