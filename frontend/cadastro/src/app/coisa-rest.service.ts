import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoint } from './const';







@Injectable({
  providedIn: 'root'
})
export class CoisaRestService {

  constructor(private http: HttpClient) { }

  save(coisa: any): Observable<any> {
    return this.http.post(endpoint + 'coisa/save', coisa);
  }

  list(): Observable<any> {
    return this.http.get(endpoint + 'coisa/list');
  }

  delete(id: any): Observable<any> {
    return this.http.delete(endpoint + 'coisa/delete/' + id);
  }

}
