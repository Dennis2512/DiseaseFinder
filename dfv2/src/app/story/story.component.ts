import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var lang = navigator.language;
    if(lang !== "de"){
      lang = "en";
    }
    if(lang==="de"){
      document.getElementById("storySpan").innerHTML = "Wir sind Tobias, Arthur und Dennis und mit dem DiseaseFinder wollen wir es jedem ermöglichen sich ein erstes Bild über seine eigene Gesundheit zu bilden. Über die Zeit ist uns das Projekt ans Herz gewachsen und wir würden uns freuen, wenn Sie das Projekt schon durch das Nutzen unterstützen. Wir freuen uns über jedes Feedback.  Bleiben Sie gesund.<br><br> - Tobias, Arthur und Dennis";
    }else{
      document.getElementById("storySpan").innerHTML = "We’re Tobias, Arthur and Dennis. With our Disease Finder we want to enable everyone to inform themselves about their health. Over time this project has really grown on us and we would appreciate it if you would support our project by simply using it. We are glad about every kind of feedback. Stay healthy. <br><br> - Tobias, Arthur und Dennis";
   
    }
  }

 

}




