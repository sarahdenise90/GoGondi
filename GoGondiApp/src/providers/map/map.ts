import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


@Injectable()
export class MapProvider {
  apiKey: string = "pk.eyJ1Ijoic2FyYWhkZW5pc2UiLCJhIjoiY2pwdHFlZGd4MDgxeDN4cDM4c25yYjNudiJ9.CTKyE-0kDXbLS8HBj35mtw"

  constructor(public http: HttpClient) {
    console.log('Hello MapProvider Provider');
  }

  geocode(address: string): Observable<any>{
    return this.http.get('https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address+ '.json?limit=1&access_token=pk.eyJ1Ijoic2FyYWhkZW5pc2UiLCJhIjoiY2pwdHFlZGd4MDgxeDN4cDM4c25yYjNudiJ9.CTKyE-0kDXbLS8HBj35mtw').pipe(
    map(data=>data as any),
    map(data => {
      var result= {};
      result['address'] = data.features[0].place_name;
      result['location'] = data.features[0].center;
      return result;
    }))
  };
}


