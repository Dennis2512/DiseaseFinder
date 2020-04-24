import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var langCache = navigator.language;
    var lang = ""+langCache.charAt(0);
    lang = lang+langCache.charAt(1);
    if(lang==="de"){
      document.getElementById("storySpan").innerHTML = "Wir sind Tobias, Arthur und Dennis und mit dem DiseaseFinder wollen wir es jedem ermöglichen sich ein erstes Bild über seine eigene Gesundheit zu bilden. Über die Zeit ist uns das Projekt ans Herz gewachsen und wir würden uns freuen, wenn Sie das Projekt schon durch das Nutzen unterstützen. Wir freuen uns über jedes Feedback.  Bleiben Sie gesund.<br><br> - Tobias, Arthur und Dennis";
    }else if(lang==="ru"){
      document.getElementById("storySpan").innerHTML = "Мы-Тобиас, Артур и Денис хотим с помощью DiaeaseFinder.org сделать возможным на первый взгляд определить состояние своего здоровья. Этот проект играет большую роль в нашей жизни и мы будем рады если вы пользуясь этим поддержите нас. Будем рады любым комментариям. Оставайтесь здоровы. <br><br> - Тобиас, Артур и Денис";
    }else{
      document.getElementById("storySpan").innerHTML = "We’re Tobias, Arthur and Dennis. With our Disease Finder we want to enable everyone to inform themselves about their health. Over time this project has really grown on us and we would appreciate it if you would support our project by simply using it. We recognize the full worth of every kind of feedback. Stay healthy. <br><br> - Tobias, Arthur and Dennis";
   
    }
  }

 

}




