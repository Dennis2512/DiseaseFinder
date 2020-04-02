import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchUp: boolean = false;
  Symptominput = null;


  OnSymptomInput(event){
    this.Symptominput = event.value;
    console.log(this.Symptominput);
  }

  constructor(/*private http: HttpClient*/) { }

  ngOnInit(): void {
  }

  searchBarUp(data: string){
    this.searchUp = true;

    this.Symptominput = data;
    console.log(this.Symptominput);

    //this.http.post();
  }
  

}


