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
  searchUp: boolean = false;
  symptomInput: string = null;

  constructor(private user: UserService) { }


//Functions
  ngOnInit(): void {
    this.user.getMessage('1').subscribe((res) => {
      console.log(res);
    });
  }

  searchBarUp(){
    this.searchUp = true;
  }

  OnSymptomsInput(symptoms: string){
    this.symptomInput = symptoms;
    console.log(this.symptomInput);
  }


  OnUpload(symptoms: string){
    let symptomSend = {
      symptom: symptoms
    }

    this.user.sendSymptoms(symptomSend).subscribe((res) => {
      console.log(res);
    });
  }

  
  OnDownload(){
    this.user.getSymptoms().subscribe((res) => {
      console.log(res);
    });
    
  }
  

  functionsWrapper(symptIn: string){
    this.searchBarUp();
    this.OnSymptomsInput(symptIn);
    this.OnUpload(symptIn);
    this.OnDownload();
  }
  

}


