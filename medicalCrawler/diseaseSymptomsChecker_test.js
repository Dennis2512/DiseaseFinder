Feature('diseaseSymptomsChecker');

Scenario('Check Diseases and Symptoms', async (I) => {
    I.amOnPage('/glossar');

    const fs = require('fs');
    // var path = require('path');

    let pageSource = await I.grabSource();

    const diseases = await I.grabTextFrom(locate('a').withAttr({ class: 'davis' }));

    fs.mkdir('HTML', async function() {
        fs.writeFile('./HTML/index.txt', pageSource, function(err, result) {
            if(err) console.log('error', err);
        });
        console.log("Index-Datei wurde erstellt.");
        //diseases.forEach(savePage);
    }    
              
    );

    clickItem();

    async function clickItem(){
        try{
            for(i = 1; i <= 30; i++){ // von 1 bis 488 Krankheiten
                await ichWarte(5000)
                openTab();
                I.click('#central-content > div > div > div > span > div > div > div.hasSlimScroll > table > tbody > tr:nth-child(' + i + ') > td:nth-child(2) > a');
                let diseaseSource = await I.grabHTMLFrom('//*[@id="dialog"]');
                //console.log(diseaseSource);
                fs.writeFile('./HTML/' + i + '.txt', diseaseSource, function (err, result) {
                    if (err)
                        console.log('error', err);
                });
                // I.closeCurrentTab();
            }
        } catch(err) {
            console.log(err);
        }

        function openTab(){
            try{
                // I.openNewTab();
                I.amOnPage('/glossar');
            } catch(err) {
                console.log(err);
            }
                            
        }

        async function ichWarte(ms) {
            return new Promise((resolve) =>
            setTimeout(resolve,ms)
            )
        }
        
    }

    

    /*async function savePage(value, index, array){
        try{
            I.click(diseases.index);
            let diseaseSource = await I.grabSource();
            fs.writeFile('./HTML/' + disease + '.txt', diseaseSource, function(err, result) {
                if(err) console.log('error', err);
            });
            console.log(disease + ".txt wurde gespeichert.")
        } catch(err){
            console.log(err);
        }
    }*/

/*
fs.writeFile(filepath, diseases, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Die Datei wurde erfolgreich gespeichert!");
});
*/

    
    console.log(diseases)
    // I.grabTextFrom('#central-content > div > div > div > span > div > div > div.hasSlimScroll').then(diseases => {
    // const formattedDiseases = []
    // for (const disease of diseases){
            
    //}
    
    // console.log (JSON.stringify(formattedDiseases))
    // console.log(formattedDiseases);
        
    // }).catch(() => {
        // console.log("Array Fehler");
    // });-+

    // Grab Symptoms
    /*
    I.grabTextFrom('#dialog > div > span').then(symptoms => {
        console.log(symptoms);
    }).catch(() => {
        console.log("Array Fehler");
    });
    */
});




// Ausführen: npx codeceptjs run --steps
// formattedDiseases.push(disease.split('\t')[1].split('\n')[0])