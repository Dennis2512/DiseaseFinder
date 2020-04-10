import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchUp: boolean = false;
  symptomInput: string = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  searchBarUp(){
    this.searchUp = true;
  }

  OnSymptomsInput(symptom: string){
    this.symptomInput = symptom;
    console.log(this.symptomInput);
  }
  OnUpload(symptomUpload: string){
    
    this.symptomInput = symptomUpload;
    const fd = new FormData();
    fd.append('symptom', this.symptomInput);
    //this.http.post('https://us-central1-diseasefinder.cloudfunctions.net/uploadFile',fd)
    //this.http.post('https://  localhost:')
    //  .subscribe(res => {
    //    console.log (res);
    //  });

  }

  functionsWrapper(symptIn: string){
    this.searchBarUp();
    this.OnSymptomsInput(symptIn);
    this.OnUpload(symptIn);
  }
  

}


