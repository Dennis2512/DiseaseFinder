Feature('mediChecker');

Scenario('mediCheck', async (I) => {

    I.amOnPage('/glossar');

    const fs = require('fs');

    let pageSource = await I.grabSource();

    const diseases = await I.grabTextFrom(locate('a').withAttr({class: 'davis'}));

    console.log(diseases);

    await clickItem(I);

});

async function clickItem(I){
    try{
        for(i = 1; i <= 5; i++){ // von 1 bis 488 Krankheiten
            I.wait(5);
            await openTab();
            I.click('#central-content > div > div > div > span > div > div > div.hasSlimScroll > table > tbody > tr:nth-child(' + i + ') > td:nth-child(2) > a');
            I.wait(3);
            let diseaseSource = await I.grabHTMLFrom('//*[@id="dialog"]');
            I.wait(3);
            console.log(diseaseSource);
            fs.writeFile('./HTML/' + i + '.txt', diseaseSource, function (err, result) {
                if (err)
                    console.log('error', err);
            });
        }
    } catch(err) {
        console.log(err);
    }
}

async function openTab(){
    try{
        I.amOnPage('/glossar');
    } catch(err) {
        console.log(err);
    }
                    
}
    

// Ausführen: npx codeceptjs run --steps