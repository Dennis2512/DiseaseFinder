Feature('Contact');

Scenario('Check getting to Contact and viewing Content', (I) => {
    I.amOnPage('http://localhost:4200');
    I.see('emergency');
    I.click('#menu-toggle');
    I.click('Contact');
    I.see('Mannheim'); 
});
