import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor (private http: HttpClient) {

  }

 getMessages(): Observable<Object> {
    return this.http.get('http://localhost:3000/messages');
  }

  getMessage(id: string): Observable<Object> {
    return this.http.get(`http://localhost:3000/messages/${id}`);
  }



}
