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
  placeholder="Symptom"
  foundDiseases: any=[];

//Data variables
  searchUp: boolean = false;
  symptomInput: string = null;

  constructor(private user: UserService) { }
  symptoms: Object;
  //symptoms: boolean = false;

//Functions
  ngOnInit(): void {
    
    


    this.user.getMessage('1').subscribe((res) => {
      console.log(res);
    });
    var langCache = navigator.language;
    var lang = ""+langCache.charAt(0);
    lang = lang+langCache.charAt(1);
    if(lang==="de"){
      document.getElementById("disclaimerSpan").innerHTML = "DiseaseFinder.org ersetzt keinen Arzt! Wenden Sie sich bei medizinischen Notfällen an den Notdienst 112.";
      document.getElementById("search").innerHTML = "Suche";
      this.placeholder = "Symptom(e)";
    }else if(lang==="ru"){
      document.getElementById("disclaimerSpan").innerHTML = "DiseaseFinder.org не заменяет врача! В случае необходимости звоните 112.";
      document.getElementById("search").innerHTML = "Поиск";
      this.placeholder = "Симптомы";
    }else{
      document.getElementById("disclaimerSpan").innerHTML = "DiseaseFinder.org does not replace an actual doctor. Please call emergency services if necessary!";
      document.getElementById("search").innerHTML = "Search";
      this.placeholder = "Symptom(s)";
    }
  }

  searchBarUp(){
    this.searchUp = true;
    //this.symptoms = true;
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
      this.foundDiseases = res
      console.log(this.foundDiseases);
      //this.symptoms = res;
      //console.log(this.symptoms);

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


