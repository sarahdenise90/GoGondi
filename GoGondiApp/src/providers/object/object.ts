import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable }from 'rxjs/Observable';
import { map } from 'rxjs/operators';


@Injectable()
export class ObjectProvider {

private serverurl: string= "http://food-search-sarahdenise.eu-gb.mybluemix.net";

  constructor(public http: HttpClient) {
  }

  loadObjects(): Observable<Object[]>{
   return this.http.get(this.serverurl + "/object").pipe(
     map(res => res as Object[])                             //Observalbe als Store zurückgeben
   );

  }
  insertObject(param: Object): Observable<any>{
    return this.http.post(this.serverurl+ "/objects", param);
  }
  public uploadObject(object: Object): Observable<any> {
    return this.http.post(this.serverurl + '/objects', object)
  }


}
