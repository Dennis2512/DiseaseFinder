import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';


  //Setup for HTTPRequests
  const httpOptions = {
    headers: new Headers({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  }  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

//Data variables
  public baseurl = 'http://localhost:3000';
  searchUp: boolean = false;
  symptomInput: string = null;

  constructor(private user: UserService) { }


//Functions
  ngOnInit(): void {
    this.user.getMessages().subscribe((res) => {
      console.log(res);
    });
  }

  searchBarUp(){
    this.searchUp = true;
  }

  OnSymptomsInput(symptom: string){
    this.symptomInput = symptom;
    console.log(this.symptomInput);
  }
  OnUpload(symptomUpload: string){
    
    /*this.symptomInput = symptomUpload;
    const fd = new FormData();
    fd.append('symptom', this.symptomInput);
    this.http.get(this.baseurl)
    this.http.post('https://  localhost:')
      .subscribe(res => {
        console.log (res);
      });
*/
  }
  OnDownload(){
    this.user.getMessages().subscribe((res) => {
      console.log(res);
    });
  }

  functionsWrapper(symptIn: string){
    this.searchBarUp();
    this.OnSymptomsInput(symptIn);
    //this.OnUpload(symptIn);
    //this.OnDownload();
  }
  

}


