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
    var langCache = navigator.language;
    var lang = ""+langCache.charAt(0);
    lang = lang+langCache.charAt(1);
    ;
    document.getElementById("noWarningAlways").innerHTML = "Keine Abmahnung ohne Kontakt ! <br> Sollte der Inhalt fremde Rechte Dritter oder gesetzliche Bestimmungen verletzen, informieren Sie mich ohne Kostennote. Ich garantiere, dass die zu Recht beanstandeten Passagen unverzüglich entfernt werden, ohne dass von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich ist. Dennoch von Ihnen ohne vorherige Kontaktaufnahme ausgelöste Kosten werden im Sinne der Schadensminderungspflicht zurückgewiesen und gegebenenfalls wird Gegenklage wegen Verletzung vorgenannter Bestimmungen eingereicht. <br>";
      
    if(lang==="de"){
      //document.getElementById("noWarning").innerHTML = "Keine Abmahnung ohne Kontakt ! <br> Sollte der Inhalt fremde Rechte Dritter oder gesetzliche Bestimmungen verletzen, informieren Sie mich ohne Kostennote. Ich garantiere, dass die zu Recht beanstandeten Passagen unverzüglich entfernt werden, ohne dass von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich ist. Dennoch von Ihnen ohne vorherige Kontaktaufnahme ausgelöste Kosten werden im Sinne der Schadensminderungspflicht zurückgewiesen und gegebenenfalls wird Gegenklage wegen Verletzung vorgenannter Bestimmungen eingereicht.";
    }else if(lang==="ru"){
      document.getElementById("germanLaw").innerHTML = "This Website is under German Law! <br>";
      document.getElementById("noWarning").innerHTML = "Никакого наказания без контакта! <br> Если содержание нарушает закон или ущемляет чьи-либо интересы, проинформируйте меня без предоставления счёта. Я гарантирую,что по праву высказанные замечания будут незамедлительно удалены без подключения с вашей стороны адвоката. Предоставленный счёт без предварительного контактирования рассматриваться не будет, и в этом случае будет подан встречный иск,из-за нарушения выше указанного утверждение.";
   
    }else{
      document.getElementById("germanLaw").innerHTML = "This Website is under German Law! <br>";
      document.getElementById("noWarning").innerHTML = "No formal reprimand without prior contact! <br>Should the content harm third parties or any legal regulations, inform me without charge. I guarantee that the rightly objected passages will be removed immediately, with no involvement needed from a legal counsel. Nevertheless, any induced charges made without previous contact will result in the charges being refused in accordance to damage obligations, and a possible countersuit on the basis of a violation of aforementioned clauses.";
   
    }
  }

}
