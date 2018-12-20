import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable }from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Property } from '../../models/property';


@Injectable()
export class PropertyProvider {

private serverurl: string= "http://food-search-sarahdenise.eu-gb.mybluemix.net";

  constructor(public http: HttpClient) {
  }

  loadProperties(): Observable<Property[]>{
   return this.http.get(this.serverurl + "/property").pipe(
     map(res => res as Property[])                             //Observalbe zurückgeben
   );

  }
  insertProperty(param: Property): Observable<any>{
    return this.http.post(this.serverurl+ "/properties", param);
  }
  public uploadProperty(property: Property): Observable<any> {
    return this.http.post(this.serverurl + '/properties', property)
  }


}
