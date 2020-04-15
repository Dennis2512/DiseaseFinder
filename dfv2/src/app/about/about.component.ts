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
      document.getElementById("noWarning").innerHTML = "Keine Abmahnung ohne Kontakt ! <br> Sollte der Inhalt fremde Rechte Dritter oder gesetzliche Bestimmungen verletzen, informieren Sie mich ohne Kostennote. Ich garantiere, dass die zu Recht beanstandeten Passagen unverzüglich entfernt werden, ohne dass von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich ist. Dennoch von Ihnen ohne vorherige Kontaktaufnahme ausgelöste Kosten werden im Sinne der Schadensminderungspflicht zurückgewiesen und gegebenenfalls wird Gegenklage wegen Verletzung vorgenannter Bestimmungen eingereicht.";
    }else{
      document.getElementById("noWarning").innerHTML = "No formal warning/reprimand without prior contact! <br>Should the content harm third parties or any legal regulations, inform me without charge/without charging me. I guarantee that the rightly objected passages will be removed immediately, with no involvement needed from a legal counsel. Nevertheless, any induced charges made without previous contact will result in the charges being refused in accordance to damage obligations, and a possible countersuit on the basis of a violation of aforementioned clauses.";
   
    }
  }

}
