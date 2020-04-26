Feature('aboutUS');

Scenario('Check getting to About Us and viewing Content', (I) => {
    I.amOnPage('http://localhost:4200');
    I.see('emergency');
    I.click('#menu-toggle');
    I.click('About us');
    I.see('Arthur');
});
