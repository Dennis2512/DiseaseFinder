Feature('mediChecker');

const fs = require('fs');

iWantSourceCode = false;    // If you want to save the pages HTML Code to .txt files, set "true"

Scenario('mediCheck', async (I) => {

    I.amOnPage('/glossar');
    
    if(iWantSourceCode) {
        let pageSource = await I.grabSource();
        createHtmlFolder(pageSource);
    }

    const diseases = await I.grabTextFrom(locate('a').withAttr({class: 'davis'}));
    console.log(diseases);
    await clickItem(I);

});

async function clickItem(I){
    const currentPosition = 1;  // This can be adjusted as you collect in tranches - position, where you stopped last time
    const maxAnzDiseases = 448;
    try{
        for(i = 1; i <= maxAnzDiseases; i++){    // 1 to 448 diseases
            if (i < currentPosition) {
                continue;
            }
            I.wait(5);
            await goBackToMainPage(I);
            I.click('#central-content > div > div > div > span > div > div > div.hasSlimScroll > table > tbody > tr:nth-child(' + i + ') > td:nth-child(2) > a');
            const seconds = getRandomNumberToWaitInSeconds(3, 22);
            I.say('I will sleep for ${seconds} seconds.')
            I.wait(seconds);

            let disease_name = await I.grabTextFrom('//*[@id="masterHeaderContainer"]/h1');
            let disease_name_professional = await I.grabTextFrom('//*[@id="dialog"]/h3[1]/small/b');
            let description = await I.grabTextFrom('//*[@id="dialog"]/p[2]/span');
            let symptoms = await I.grabTextFrom('//*[@id="dialog"]/div');
            console.log(disease_name + '\n' + disease_name_professional + '\n' + description + '\n' + symptoms + '\n');

            await generateJSONwithAllDiseases(disease_name, disease_name_professional, description, symptoms, i, maxAnzDiseases);

            if(iWantSourceCode) {
                let diseaseSource = await I.grabHTMLFrom('//*[@id="dialog"]');
                I.wait(3);
                console.log(diseaseSource);
                createHtmlFiles(i, diseaseSource);
            }
        }
    } catch(err) {
        console.log(err);
    }
}

async function createHtmlFolder(pageSource) {
    fs.mkdir('HTML', async function() {
        fs.writeFile('./HTML/index.txt', pageSource, (err) => {
            if(err) console.log('error', err);
        });
        console.log("Index-Datei wurde erstellt.");
        console.log("===========================");
    });
}

function createHtmlFiles(i, diseaseSource) {
    fs.writeFile('./HTML/' + i + '.txt', diseaseSource, (err) => {
        if (err)
            console.log('error', err);
    });
}

async function generateJSONwithAllDiseases(disease_name, disease_name_professional, description, symptoms, i, maxAnzDiseases) {
    let language = "GER";   // Define language for file name (GER, EN)
    const fileWithData = '../assets/allDiseases' + language + '.json';

    let symptomsString = symptoms;
    let symptomsArray = symptomsString.split(",");
    console.log(symptomsArray.length);
    console.log(symptomsArray);
    let s = symptomsArray.length;

    for(x = 0; x < s; x++) {
        symptomsArray[x] = "\"" + symptomsArray[x] + "\"";
    }

    let endOfFile = "";
    if(i == maxAnzDiseases) {
        endOfFile = '\n' + "]";
    } else {
        endOfFile = ",";
    }

    let d_name = "{" + '\n' + "\"disease_name\": \"" + disease_name + "\"," + '\n';
    let d_name_pro = "\"disease_name_professional\": \"" + disease_name_professional + "\"," + '\n';
    let d_desc = "\"description\": \"" + description + "\"," + '\n';
    let d_symptoms = "\"symptoms\": [" + symptomsArray + "]" + '\n' + "}" + endOfFile + '\n';

    let allInformation = d_name + d_name_pro + d_desc + d_symptoms;

    try {
        if (fs.existsSync(fileWithData)) {
            fs.appendFile(fileWithData, allInformation, (err) => {
                if(err) console.log('error', err);
            });
            console.log("Krankheiten wurden der Datei angehängt.");
            console.log("=======================================");
        } else {
            fs.writeFile(fileWithData, "[" + '\n' + allInformation, (err) => {
                if(err) console.log('error', err);
            });
            console.log("Krankheiten-Datei wurde initial erstellt.");
            console.log("=======================================");
        }
    } catch(err) {
        console.error(err)
    }
}

async function goBackToMainPage(I) {
    try{
        I.amOnPage('/glossar');
    } catch(err) {
        console.log(err);
    }
}

function getRandomNumberToWaitInSeconds(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

// Ausführen: npm start