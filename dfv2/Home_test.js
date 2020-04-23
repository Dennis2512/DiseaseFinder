Feature('Home');

Scenario('Nvigating to Home', (I) => {
    I.amOnPage('http://localhost:4200/story');
    I.see('Arthur');
    I.click('#menu-toggle');
    I.click('Home');
    I.see('emergency'); 
    I.see('Search');
});

Scenario('Searching for Disease by Symptom', (I) => {
    
});
