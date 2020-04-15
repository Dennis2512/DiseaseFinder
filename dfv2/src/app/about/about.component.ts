import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var lang = navigator.language;
    if(lang !== "de"){
      lang = "en";
    }
    ;
    if(lang==="de"){
      document.getElementById("noWarning").innerHTML = "Keine Abmahnung ohne Kontakt !! <br> Sollte der Inhalt fremde Rechte Dritter oder gesetzliche Bestimmungen verletzen, informieren Sie mich ohne Kostennote. Ich garantiere, dass die zu Recht beanstandeten Passagen unverzüglich entfernt werden, ohne dass von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich ist. Dennoch von Ihnen ohne vorherige Kontaktaufnahme ausgelöste Kosten werden im Sinne der Schadensminderungspflicht zurückgewiesen und gegebenenfalls wird Gegenklage wegen Verletzung vorgenannter Bestimmungen eingereicht.";
    }else{
      document.getElementById("noWarning").innerHTML = "Text is in the making";
   
    }
  }

}
