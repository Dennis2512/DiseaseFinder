Feature("frontend-content");

let diseaseFinder = "https://diseasefinder.org/";
let diseaseFinderBeta = "https://beta.diseasefinder.org/";
let language = "GER";
// let language = "ENG";
// let language = "RUS";

// Clickables
let burgerIcon = '//*[@id="menu-toggle"]';
let home = '//*[@id="everyth"]/div[1]/mat-sidenav-container/mat-sidenav/div/mat-nav-list/a[1]/div';
let about_us = '//*[@id="everyth"]/div[1]/mat-sidenav-container/mat-sidenav/div/mat-nav-list/a[2]/div';
let imprint = '//*[@id="everyth"]/div[1]/mat-sidenav-container/mat-sidenav/div/mat-nav-list/a[3]/div';

Scenario("Website Content Test", (I) => {
  I.amOnPage(diseaseFinder);
  I.see("DiseaseFinder" && "We don't cure cancer, but we sure come close.");
  I.see("SBN Communications GbR");
  console.log("Header and Footer is visible.");
  I.click(burgerIcon);
  console.log("BurgerIcon is clickable.");
  if (language == "GER") {
    I.see("Home" && "Über uns" && "Impressum");
    console.log("Navigation is visible.");
    I.click(about_us);
    I.see("Tobias" && "Arthur" && "Dennis");
    console.log("About us content is visible.");
    I.click(burgerIcon);
    I.see("Home" && "Über uns" && "Impressum");
    I.click(imprint);
    I.see("68219 Mannheim" && "E-Mail: info@diseasefinder.org");
    console.log("Imprint content is visible.");
    I.click(burgerIcon);
    I.see("Home" && "Über uns" && "Impressum");
    I.click(home);
    I.see("DiseaseFinder" && "We don't cure cancer, but we sure come close.");
    console.log("Home content is visible.");
    I.click(burgerIcon);
    I.see("Home" && "Über uns" && "Impressum");
    I.click(burgerIcon);
    I.dontSee("Home" && "Über uns" && "Impressum");
    I.see("DiseaseFinder" && "We don't cure cancer, but we sure come close.");
    console.log("SideNav can be closed normally.");
  }
});

// Ausführen: npm start