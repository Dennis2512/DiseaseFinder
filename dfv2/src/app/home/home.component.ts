import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchUp: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  data:{
    symptom1: string;
  }

  searchBarUp(data){
    data.toString();
    this.searchUp = true;
    console.log(data);
  }
  

}


