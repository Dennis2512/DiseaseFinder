import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor (
    private http: HttpClient
  ) {}

  getData() {
    return this.http.get(``);
  }


}
