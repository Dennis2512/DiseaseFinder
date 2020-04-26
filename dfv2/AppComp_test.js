Feature('AppComp');

Scenario('Testing App Component', (I) => {
    I.amOnPage('http://localhost:4200');
    I.see('DiseaseFinder');
    I.see('We don\'t cure cancer, but we sure come close.');
    I.click('#menu-toggle');
    I.click('Contact');

    I.see('DiseaseFinder');
    I.see('We don\'t cure cancer, but we sure come close.');
    I.click('#menu-toggle');
    I.click('About us');

    I.see('DiseaseFinder');
    I.see('We don\'t cure cancer, but we sure come close.');
    I.click('#menu-toggle');
    I.click('Home');

    I.see('DiseaseFinder');
    I.see('We don\'t cure cancer, but we sure come close.');
    
    I.click('DiseaseFinder');
    I.click('#menu-toggle');
    I.see('Home');
    I.see('About us');
    I.see('Contact');
});
