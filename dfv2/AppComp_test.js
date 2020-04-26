Feature('AppComp');

Scenario('Testing App Component', (I) => {
    I.amOnPage('http://localhost:4200');
    I.see('DiseaseFinder Beta v.0.9.5');
    I.see('We don\'t cure cancer, but we sure come close.');
    I.click('#menu-toggle');
    I.click('Contact');

    I.see('DiseaseFinder Beta v.0.9.5');
    I.see('We don\'t cure cancer, but we sure come close.');
    I.click('#menu-toggle');
    I.click('About us');

    I.see('DiseaseFinder Beta v.0.9.5');
    I.see('We don\'t cure cancer, but we sure come close.');
    I.click('#menu-toggle');
    I.click('Home');

    I.see('DiseaseFinder Beta v.0.9.5');
    I.see('We don\'t cure cancer, but we sure come close.');
    
    I.click('DiseaseFinder Beta v.0.9.5');
    I.click('#menu-toggle');
    I.see('Home');
    I.see('About us');
    I.see('Contact');
});
