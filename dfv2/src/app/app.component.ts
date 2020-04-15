import { Component,OnInit,KeyValueDiffers, KeyValueDiffer } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dfv2';
  opened = false;
  differ: KeyValueDiffer<string, any>;

  constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
   }

   public ngDoCheck(): void{
    let button = document.getElementById( 'menu-toggle' );
  const change = this.differ.diff(this);
  if (change) {
    change.forEachChangedItem(item => {
      console.log('item changed', item);
      if(this.opened==true){
       
    button.className += ' opened';
        button.setAttribute( 'aria-expanded', 'true' );
      }
      else{
        button.className = button.className.replace( ' opened', '' );
        button.setAttribute( 'aria-expanded', 'false' );
      }
    });
  }
}

  ngOnInit(): void {
    var lang = navigator.language;
    if(lang !== "de"){
      lang = "en";
    }
    console.log("language:"+lang);
    if(lang==="de"){
      document.getElementById("aboutUsSpan").innerHTML = "Über uns";
      document.getElementById("contactSpan").innerHTML = "Impressum";
    }else{
      document.getElementById("aboutUsSpan").innerHTML = "About us";
      document.getElementById("contactSpan").innerHTML = "Contact";;
   
    }
}
}
export class IconSvgExample {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
}
