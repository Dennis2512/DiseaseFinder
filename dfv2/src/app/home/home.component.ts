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
    var lang = navigator.language;
    if(lang !== "de"){
      lang = "en";
    }
    if(lang==="de"){
      document.getElementById("disclaimerSpan").innerHTML = "DiseaseFinder.org ersetzt keinen Arzt! Wenden Sie sich bei medizinischen Notfällen an den Notdienst 112.";
      document.getElementById("search").innerHTML = "Suche";
      document.getElementById("searchBarSpan").innerHTML = "<input type=\"text\" #symptomInput class=\"form-control\" placeholder=\"Symptom(e)\" aria-label=\"inputSymphthom\" aria-describedby=\"basic-addon2\">";
    }else{
      document.getElementById("disclaimerSpan").innerHTML = "DiseaseFinder.org does not replace an actual doctor. Please call emeergency services if necessary!";
      document.getElementById("search").innerHTML = "Search";
      document.getElementById("searchBarSpan").innerHTML = "<input type=\"text\" #symptomInput class=\"form-control\" placeholder=\"Symptom(s)\" aria-label=\"inputSymphthom\" aria-describedby=\"basic-addon2\">";
    }
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


