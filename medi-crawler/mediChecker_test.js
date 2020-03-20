Feature('mediChecker');

const fs = require('fs');

Scenario('mediCheck', async (I) => {

    I.amOnPage('/glossar');
    let pageSource = await I.grabSource();

    fs.mkdir('HTML', async function() {
        fs.writeFile('./HTML/index.txt', pageSource, (err, result) => {
            if(err) console.log('error', err);
        });
        console.log("Index-Datei wurde erstellt.");
    });

    const diseases = await I.grabTextFrom(locate('a').withAttr({class: 'davis'}));
    console.log(diseases);
    await clickItem(I);

});

async function clickItem(I){
    const currentPosition = 389; // This can be adjusted as you collect in tranches
    try{
        for(i = 1; i <= 410; i++){ // 1 to 488 diseases
            if (i < currentPosition) {
                continue;
            }
            I.wait(5);
            await openTab(I);
            I.click('#central-content > div > div > div > span > div > div > div.hasSlimScroll > table > tbody > tr:nth-child(' + i + ') > td:nth-child(2) > a');
            const seconds = getRandomNumberToWaitInSeconds(3, 22);
            I.say('I will sleep for ${seconds} seconds.')
            I.wait(seconds);
            let diseaseSource = await I.grabHTMLFrom('//*[@id="dialog"]');
            I.wait(3);
            console.log(diseaseSource);
            fs.writeFile('./HTML/' + i + '.txt', diseaseSource, (err, result) => {
                if (err)
                    console.log('error', err);
            });
        }
    } catch(err) {
        console.log(err);
    }
}

async function openTab(I){
    try{
        I.amOnPage('/glossar');
    } catch(err) {
        console.log(err);
    }
                    
}

function getRandomNumberToWaitInSeconds(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

// Ausführen: npm run start