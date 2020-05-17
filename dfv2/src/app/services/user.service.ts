import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private baseurl = 'https://35.234.114.16:443';
  private baseurl = 'http://localhost:443'

  constructor (private http: HttpClient) {

  }

 getSymptoms(): Observable<Object> {
    return this.http.get(`${this.baseurl}/messages`);
  }

  getMessage(id: string): Observable<Object> {
    return this.http.get(`${this.baseurl}/messages/${id}`);
  }

  sendSymptoms(user): Observable<Object> {

    return this.http.post(`${this.baseurl}/messages`, {
      symptom: user.symptom
    });

  }



}
