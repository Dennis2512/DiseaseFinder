import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from "@angular/common/http";
import { UserService } from "../services/user.service";

//Setup for HTTPRequests
const httpOptions = {
  headers: new Headers({
    "Access-Control-Allow-Origin": "*",
    Authorization: "authkey",
    userid: "1",
  }),
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  placeholder = "Symptom";
  foundDiseases: any = [];
  

  // autocomplete changes
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  // end

  //Data variables
  searchUp: boolean = false;
  symptomInput: Array<any> = null;

  constructor(private user: UserService) {}
  symptoms;

  //Functions
  ngOnInit(): void {
    this.user.getMessage("1").subscribe((res) => {
      console.log(res);
    });
    //
    var input = document.getElementById("inputList");
    input.addEventListener("keyup", function(event){
      if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("search").click();
      }
    });
    //Sprache
    var langCache = navigator.language;
    var lang = "" + langCache.charAt(0);
    lang = lang + langCache.charAt(1);
    if (lang === "de") {
      document.getElementById("disclaimerSpan").innerHTML =
        "DiseaseFinder.org ersetzt keinen Arzt! Wenden Sie sich bei medizinischen Notfällen an den Notdienst 112.";
      document.getElementById("search").innerHTML = "Suche";
      this.placeholder = "Symptom(e)";
    } else if (lang === "ru") {
      document.getElementById("disclaimerSpan").innerHTML =
        "DiseaseFinder.org не заменяет врача! В случае необходимости звоните 112.";
      document.getElementById("search").innerHTML = "Поиск";
      this.placeholder = "Симптомы";
    } else {
      document.getElementById("disclaimerSpan").innerHTML =
        "DiseaseFinder.org does not replace an actual doctor. Please call emergency services if necessary!";
      document.getElementById("search").innerHTML = "Search";
      this.placeholder = "Symptom(s)";
    }

    // autocomplete changes
    this.dropdownList = [
      { id: 1, itemName: "Abwehrspannung am Bauch" },
      { id: 2, itemName: "Afterjucken" },
      { id: 3, itemName: "Afterschmerzen" },
      { id: 4, itemName: "Aggressivität" },
      { id: 5, itemName: "Angst" },
      { id: 6, itemName: "Aphthen" },
      { id: 7, itemName: "Appetitminderung" },
      { id: 8, itemName: "Appetitzunahme" },
      { id: 9, itemName: "Armschmerzen" },
      { id: 10, itemName: "Armschwellung" },
      { id: 11, itemName: "Atemabhängige Schmerzen" },
      { id: 12, itemName: "Atembeschwerden (in schweren Fällen)" },
      { id: 13, itemName: "Atemnot" },
      { id: 14, itemName: "Augenblinzeln" },
      { id: 15, itemName: "Augenbrennen" },
      { id: 16, itemName: "Augenjucken" },
      { id: 17, itemName: "Augenrötung" },
      { id: 18, itemName: "Augenschmerzen" },
      { id: 19, itemName: "Augentrockenheit" },
      { id: 20, itemName: "Ausbleiben der Regelblutung" },
      { id: 21, itemName: "Ausgedehnter Bauch" },
      { id: 22, itemName: "Auswurf" },
      { id: 23, itemName: "Bauchschmerzen" },
      { id: 24, itemName: "Bauchwandvorwölbung" },
      { id: 25, itemName: "Beeinträchtigung des Geruchs-/Geschmackssinns" },
      { id: 26, itemName: "Beinschmerzen" },
      { id: 27, itemName: "Beinschwellung" },
      { id: 28, itemName: "Belastungsabhängige Beinschmerzen" },
      { id: 29, itemName: "Benommenheit" },
      { id: 30, itemName: "Berührungsüberempfindlichkeit" },
      { id: 31, itemName: "Bewegungsarmut" },
      { id: 32, itemName: "Bewegungseinschränkung der Hüfte" },
      { id: 33, itemName: "Bewegungseinschränkung des Beins" },
      { id: 34, itemName: "Bewegungseinschränkung des Fingers" },
      { id: 35, itemName: "Bewegungseinschränkung des Knöchels" },
      { id: 36, itemName: "Bewegungseinschränkung des Rückens" },
      { id: 37, itemName: "Bewegungsunmöglichkeit" },
      { id: 38, itemName: "Bewusstlosigkeit" },
      { id: 39, itemName: "Blauer Fleck der Haut" },
      { id: 40, itemName: "Blendempfindlichkeit" },
      { id: 41, itemName: "Blut im Stuhl" },
      { id: 42, itemName: "Blutiger Husten" },
      { id: 43, itemName: "Blutiges Erbrechen" },
      { id: 44, itemName: "Blutung aus der Scheide" },
      { id: 45, itemName: "Blutung in der Bindehaut" },
      { id: 46, itemName: "Blähungen" },
      { id: 47, itemName: "Bläschenbildung an einer Hautstelle" },
      { id: 48, itemName: "Blässe" },
      { id: 49, itemName: "Bläuliche Verfärbung der Haut" },
      { id: 50, itemName: "Brennen beim Wasserlösen" },
      { id: 51, itemName: "Brennen im Hals" },
      { id: 52, itemName: "Brennende Magenschmerzen" },
      { id: 53, itemName: "Brustschmerzen" },
      { id: 54, itemName: "Desorientierung" },
      { id: 55, itemName: "Doppelbilder plötzlich auftretend" },
      { id: 56, itemName: "Doppelbilder" },
      { id: 57, itemName: "Druckgefühl im Ohr" },
      { id: 58, itemName: "Dunkler Urin" },
      { id: 59, itemName: "Durchfall" },
      { id: 60, itemName: "Eitriger Ausfluss aus der Harnröhre" },
      { id: 61, itemName: "Eitriger Ausfluss aus der Vagina" },
      { id: 62, itemName: "Ellbogenschmerzen" },
      { id: 63, itemName: "Engegefühl in der Brust" },
      { id: 64, itemName: "Erbrechen" },
      { id: 65, itemName: "Erektionsstörung" },
      { id: 66, itemName: "Erhöhte Harnmenge" },
      { id: 67, itemName: "Erhöhter Speichelfluss" },
      { id: 68, itemName: "Erinnerungslücke" },
      { id: 69, itemName: "Erschwerte Stuhlentleerung" },
      { id: 70, itemName: "Essattacken" },
      { id: 71, itemName: "Fettiger Stuhlgang" },
      { id: 72, itemName: "Feuchte und aufgeweichte Haut" },
      { id: 73, itemName: "Fieber" },
      { id: 74, itemName: "Fingerdeformität" },
      { id: 75, itemName: "Fingerschmerzen" },
      { id: 76, itemName: "Fingerschwellung" },
      { id: 77, itemName: "Fremdkörpergefühl im Auge" },
      { id: 78, itemName: "Freudlosigkeit" },
      { id: 79, itemName: "Frühes Sättigungsgefühl" },
      { id: 80, itemName: "Fussschmerzen" },
      { id: 81, itemName: "Fussschwellung" },
      { id: 82, itemName: "Gangschwierigkeiten" },
      { id: 83, itemName: "Gefühl von Restharn" },
      { id: 84, itemName: "Gehörminderung" },
      { id: 85, itemName: "Gelbliche Verfärbung der Haut" },
      { id: 86, itemName: "Gelbliche Verfärbung des Augenweisses" },
      { id: 87, itemName: "Gelenkinstabilität" },
      { id: 88, itemName: "Gelenkrötung" },
      { id: 89, itemName: "Gelenkschmerzen" },
      { id: 90, itemName: "Gelenkschwellung" },
      { id: 91, itemName: "Gelenkserguss" },
      { id: 92, itemName: "Gemütsschwankungen" },
      { id: 93, itemName: "Genitalwarzen" },
      { id: 94, itemName: "Geräuschempfindlichkeit" },
      { id: 95, itemName: "Gesichtsfeldausfall" },
      { id: 96, itemName: "Gesichtslähmung" },
      { id: 97, itemName: "Gesichtsschmerzen" },
      { id: 98, itemName: "Gesichtsschwellung" },
      { id: 99, itemName: "Gesteigerter Antrieb" },
      { id: 100, itemName: "Gewichtsverlust" },
      { id: 101, itemName: "Gewichtszunahme" },
      { id: 102, itemName: "Gleichgewichtsstörung" },
      { id: 103, itemName: "Gliederschmerzen" },
      { id: 104, itemName: "Haarausfall" },
      { id: 105, itemName: "Halluzination" },
      { id: 106, itemName: "Halo" },
      { id: 107, itemName: "Halsschmerzen" },
      { id: 108, itemName: "Handschmerzen" },
      { id: 109, itemName: "Handschwellung" },
      { id: 110, itemName: "Harndrang" },
      { id: 111, itemName: "Harter Stuhlgang" },
      { id: 112, itemName: "Hautausschlag" },
      { id: 113, itemName: "Hautknötchen" },
      { id: 114, itemName: "Hautläsion" },
      { id: 115, itemName: "Hautquaddel" },
      { id: 116, itemName: "Hautrötung" },
      { id: 117, itemName: "Hautverdickung" },
      { id: 118, itemName: "Heiserkeit" },
      { id: 119, itemName: "Hervortreten der Augen" },
      { id: 120, itemName: "Herzgeräusch" },
      { id: 121, itemName: "Herzrasen" },
      { id: 122, itemName: "Hitzewallungen" },
      { id: 123, itemName: "Hodenschmerzen" },
      { id: 124, itemName: "Hodenschwellung" },
      { id: 125, itemName: "Husten mit Auswurf" },
      { id: 126, itemName: "Husten" },
      { id: 127, itemName: "Hängendes Augenlid" },
      { id: 128, itemName: "Häufiges Wasserlösen" },
      { id: 129, itemName: "Hörverlust" },
      { id: 130, itemName: "Hüftdeformität" },
      { id: 131, itemName: "Hüftschmerzen" },
      { id: 132, itemName: "Jucken oder Brennen im Genitalbereich" },
      { id: 133, itemName: "Juckreiz an der Kopfhaut" },
      { id: 134, itemName: "Juckreiz auf der Haut" },
      { id: 135, itemName: "Juckreiz im Mund oder Rachen" },
      { id: 136, itemName: "Juckreiz im Ohr" },
      { id: 137, itemName: "Juckreiz in der Nase" },
      { id: 138, itemName: "Kahle Stelle der Kopfbehaarung" },
      { id: 139, itemName: "Kalte Füsse" },
      { id: 140, itemName: "Kalte Hände" },
      { id: 141, itemName: "Kaltschweissigkeit" },
      { id: 142, itemName: "Kauschmerzen" },
      { id: 143, itemName: "Kieferklemme" },
      { id: 144, itemName: "Kniedeformität" },
      { id: 145, itemName: "Knieschmerzen" },
      { id: 146, itemName: "Knochenbruch" },
      { id: 147, itemName: "Knochenschmerzen" },
      { id: 148, itemName: "Knoten in der Brust" },
      { id: 149, itemName: "Knöcheldeformität" },
      { id: 150, itemName: "Knöchelschwellung" },
      { id: 151, itemName: "Konzentrationsschwierigkeiten" },
      { id: 152, itemName: "Kopfhautrötung" },
      { id: 153, itemName: "Kopfschmerzen" },
      { id: 154, itemName: "Krank fühlen" },
      { id: 155, itemName: "Kreuzschmerzen" },
      { id: 156, itemName: "Kribbeln" },
      { id: 157, itemName: "Krustenbildung" },
      { id: 158, itemName: "Krämpfe" },
      { id: 159, itemName: "kurzzeitig" },
      { id: 160, itemName: "Kälteempfindlichkeit" },
      { id: 161, itemName: "Lageanomalie des Hodens" },
      { id: 162, itemName: "Lernschwierigkeiten" },
      { id: 163, itemName: "Lichtüberempfindlichkeit" },
      { id: 164, itemName: "Lidschwellung" },
      { id: 165, itemName: "Lippenschwellung" },
      { id: 166, itemName: "Loslassschmerz am Bauch" },
      { id: 167, itemName: "Lymphknotenschwellung am Hals" },
      { id: 168, itemName: "Lymphknotenschwellung im Achselbereich" },
      { id: 169, itemName: "Lymphknotenschwellung in der Leiste" },
      { id: 170, itemName: "Lähmung" },
      { id: 171, itemName: "Mitesser" },
      { id: 172, itemName: "Morgensteifigkeit" },
      { id: 173, itemName: "Mundschmerzen" },
      { id: 174, itemName: "Mundtrockenheit" },
      { id: 175, itemName: "Muskelschmerzen" },
      { id: 176, itemName: "Muskelschwund am Arm" },
      { id: 177, itemName: "Muskelschwund am Bein" },
      { id: 178, itemName: "Muskelschwäche am Arm" },
      { id: 179, itemName: "Muskelschwäche am Bein" },
      { id: 180, itemName: "Muskelschwäche" },
      { id: 181, itemName: "Muskelversteifung" },
      { id: 182, itemName: "Müdigkeit" },
      { id: 183, itemName: "Mühe Gespräche zu verstehen" },
      { id: 184, itemName: "Mühe zu schlucken" },
      { id: 185, itemName: "Mühe zu sprechen" },
      { id: 186, itemName: "Nachtröpfeln" },
      { id: 187, itemName: "Nachtschweiss" },
      { id: 188, itemName: "Nackenschmerzen" },
      { id: 189, itemName: "Nackensteifigkeit" },
      { id: 190, itemName: "Nagelbrüchigkeit" },
      { id: 191, itemName: "Nagelverfärbung" },
      { id: 192, itemName: "Nagelveränderungen" },
      { id: 193, itemName: "Narbe" },
      { id: 194, itemName: "Nasenbluten" },
      { id: 195, itemName: "Nasenbrennen" },
      { id: 196, itemName: "Nasenlaufen" },
      { id: 197, itemName: "Nervosität" },
      { id: 198, itemName: "Nicht-heilende Hautwunde" },
      { id: 199, itemName: "Niesen" },
      { id: 200, itemName: "Nächtlicher Husten" },
      { id: 201, itemName: "Nächtliches Wasserlösen" },
      { id: 202, itemName: "Offenes Bein" },
      { id: 203, itemName: "Ohnmächtig fühlen" },
      { id: 204, itemName: "Ohrenschmerzen" },
      { id: 205, itemName: "Ohrgeräusch" },
      { id: 206, itemName: "Pfeifendes Atmen" },
      { id: 207, itemName: "Probleme des Spürsinns am Gesicht" },
      { id: 208, itemName: "Probleme des Spürsinns an den Füssen" },
      { id: 209, itemName: "Pulslosigkeit" },
      { id: 210, itemName: "Rot glänzende Zunge" },
      { id: 211, itemName: "Ruhelosigkeit" },
      { id: 212, itemName: "Rückendeformität" },
      { id: 213, itemName: "Rückenschmerzen" },
      { id: 214, itemName: "Schlaflosigkeit" },
      { id: 215, itemName: "Schluckauf" },
      { id: 216, itemName: "Schluckschmerzen" },
      { id: 217, itemName: "Schläfrigkeit mit spontaner Einschlafneigung" },
      { id: 218, itemName: "Schmerzausstrahlung in das Bein" },
      { id: 219, itemName: "Schmerzausstrahlung in den Arm" },
      { id: 220, itemName: "Schmerzen beim Wasserlösen" },
      { id: 221, itemName: "Schmerzhafte Stuhlentleerung" },
      { id: 222, itemName: "Schnelle" },
      { id: 223, itemName: "Schnupfen" },
      { id: 224, itemName: "Schuppung der Haut" },
      { id: 225, itemName: "Schuppung der Kopfhaut" },
      { id: 226, itemName: "Schwarzer Stuhlgang" },
      { id: 227, itemName: "Schwarzwerden vor den Augen" },
      { id: 228, itemName: "Schwellung im Genitalbereich" },
      { id: 229, itemName: "Schwindel" },
      { id: 230, itemName: "Schwitzen" },
      {
        id: 231,
        itemName: "Schwäche oder Taubheit der rechten oder linken Körperhälfte",
      },
      { id: 232, itemName: "Schüttelfrost" },
      { id: 233, itemName: "Sehschwäche für entfernte Objekte" },
      { id: 234, itemName: "Sehschwäche für nahe Objekte" },
      { id: 235, itemName: "Sehschwäche" },
      { id: 236, itemName: "Seitenschmerz" },
      { id: 237, itemName: "Sodbrennen" },
      { id: 238, itemName: "Spannungsgefühl in den Beinen" },
      { id: 239, itemName: "Störung der Regelblutung" },
      { id: 240, itemName: "Taubheitsgefühl am Arm" },
      { id: 241, itemName: "Taubheitsgefühl am Bein" },
      { id: 242, itemName: "Taubheitsgefühl der Hände" },
      { id: 243, itemName: "Tick" },
      { id: 244, itemName: "Traurigkeit" },
      { id: 245, itemName: "Trockene Haut" },
      { id: 246, itemName: "Tränen" },
      { id: 247, itemName: "Ungewollte Bewegungen" },
      { id: 248, itemName: "Unkontrollierter Stuhlabgang" },
      { id: 249, itemName: "Unregelmässiger Herzrhythmus" },
      { id: 250, itemName: "Unregelmässiges Muttermal" },
      { id: 251, itemName: "Unterbauchschmerzen" },
      { id: 252, itemName: "Untergewichtigkeit" },
      { id: 253, itemName: "Unvollständige Stuhlentleerung" },
      { id: 254, itemName: "Venenzeichnung" },
      { id: 255, itemName: "Vergesslichkeit" },
      { id: 256, itemName: "Vergröberung der Hautstruktur" },
      { id: 257, itemName: "Vergrösserte Wade" },
      { id: 258, itemName: "Verhärtung der Haut" },
      { id: 259, itemName: "Verkleben der Augen" },
      { id: 260, itemName: "Verkrümmung der Wirbelsäule" },
      { id: 261, itemName: "Verlangsamte Hell-Dunkel-Adaption" },
      { id: 262, itemName: "Vermehrter Durst" },
      { id: 263, itemName: "Verminderter Harnstrahl" },
      { id: 264, itemName: "Verschwommenes Sehen" },
      { id: 265, itemName: "Verstopfte Nase" },
      { id: 266, itemName: "vertiefte Atmung" },
      { id: 267, itemName: "Verzögerter Beginn beim Wasserlösen" },
      { id: 268, itemName: "Völlegefühl im Bauch" },
      { id: 269, itemName: "Wadenkrämpfe" },
      { id: 270, itemName: "Wadenschmerzen" },
      { id: 271, itemName: "Wangenschwellung" },
      { id: 272, itemName: "Weniger als 3 Stuhlgänge pro Woche" },
      { id: 273, itemName: "Wimpernausfall" },
      { id: 274, itemName: "Wortfindungsstörung" },
      { id: 275, itemName: "Wunde" },
      { id: 276, itemName: "Zahnschmerzen" },
      { id: 277, itemName: "Zehendeformität" },
      { id: 278, itemName: "Zehschwellung" },
      { id: 279, itemName: "zeitliche oder örtliche" },
      { id: 280, itemName: "Zittern bei Bewegung" },
      { id: 281, itemName: "Zittern in Ruhe" },
      { id: 282, itemName: "Zungenbrennen" },
      { id: 283, itemName: "Zungenschwellung" },
      { id: 284, itemName: "Zyklusabhängige Bauchschmerzen" },
      { id: 285, itemName: "Übelkeit" },
      { id: 286, itemName: "Übelriechender Stuhlgang" },
      { id: 287, itemName: "Übergewichtigkeit" },
    ];
    // Items, die schon vorausgewählt sei sollen
    this.selectedItems = [
      // Bsp: { id: 285, itemName: "Übelkeit" },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select your Symptoms",
      selectAllText: "Select All",
      unSelectAllText: "Un-Select All",
      enableSearchFilter: true,
    };
    // end
  }

  // autocomplete changes
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  // end

  searchBarUp() {
    this.searchUp = true;
    //this.symptoms = true;
  }
  OnSymptomsInput(symptoms: Array<any>) {
    this.symptomInput = symptoms;
    console.log(this.symptomInput);
  }

  OnUpload(symptoms: Array<any>) {
    let symptomSend = {
      symptom: symptoms,
    };

    this.user.sendSymptoms(symptomSend).subscribe((res) => {
      //this.foundDiseases = res;
      //console.log(this.foundDiseases);
      this.symptoms = res;
      console.log(this.symptoms);
    });
  }

  OnDownload() {
    this.user.getSymptoms().subscribe((res) => {
      console.log(res);
    });
  }

  functionsWrapper(symptIn: Array<any>) {
    console.log("wrapper Inhalt: "+this.selectedItems);
    this.searchBarUp();
    this.OnSymptomsInput(this.selectedItems);
    this.OnUpload(this.selectedItems);
    this.OnDownload();
  }
}
