import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClientDto } from './client.dto';
import * as testdata from './../../test.json';
import * as data from './../../allDiseasesGER.json'

//Test hardcoded 
var sampleData = '{ "Diseases" : [' +
'{ "disease_name":"disease1" , "disease_name_professional":"disease1_professional1", "description":"disease1_description", "symptoms":"disease1_symptoms" },' +
'{ "disease_name":"disease2" , "disease_name_professional":"disease2_professional1", "description":"disease2_description", "symptoms":"disease2_symptoms" },' +
'{ "disease_name":"disease3" , "disease_name_professional":"disease3_professional1", "description":"disease3_description", "symptoms":"disease3_symptoms" }]}';

/**
 * @returns {JSON}
 */
function  sampleCreator(){
    //console.log(sampleData);
    return sampleData;

};

//Minimal Approach to search for diseases with client inputdata without DB
var matchingDiseases: JSON;

//matchingDiseases.parse = <any>[];
var asset = <any>data;
//console.log(asset);
console.log(typeof(asset));


/**
 * 
 * @param symptomsToCheck 
 * @param userinput
 * @returns {boolean} 
 */
function searchSymptom(symptomsToCheck: any, userinput: ClientDto){
    let insertable: boolean;
    insertable = false;

    //symptomsToCheck.forEach(element => {
    for (let element in (symptomsToCheck)) {
        let thisSymptomToCheck = symptomsToCheck[element];
        console.log (thisSymptomToCheck);
        //console.log(typeof(element));
        if(thisSymptomToCheck === userinput.symptom){
            insertable = true;
        } 
              
    };
    console.log(insertable);
    return insertable;
}
/**
 * 
 * @param userinput 
 * @returns {JSON}
 */
function findDisease(userinput: ClientDto){
    
    //suche nach matches des userinputs in JSON des Asset ordners
    for (let diseaseValue in (asset)) {
        let disease = asset[diseaseValue];
        let symptomsToCheck = disease.symptoms;
        console.log(symptomsToCheck);
        console.log(typeof(symptomsToCheck));

        if(searchSymptom(symptomsToCheck, userinput) == true){

            matchingDiseases = disease;
            console.log(matchingDiseases);
            console.log("hat ein Match gefunden");
            //break just for stable version, so we avoid the TypeError in the end of the Object iteration
            //break;
        }else{
            console.log("hat kein Match gefunden");
        }    
    }
    //gebe alle Krankheiten zurück die in den Symptomen den einen oder mehrere Userinputs besitzen
    console.log("Matching diseases: " + matchingDiseases);
    if (matchingDiseases === null || matchingDiseases === undefined){
        matchingDiseases = JSON.parse('{"message":"!!!hat keine Krankheit gefunden!!!"}');
    }
    return matchingDiseases;
}



@Controller('messages')
export class MessagesController {
    @Get()
    getSymptoms(){
      return {
          message: 'Hier kannst du die Symptome der Datenbank ziehen',
      }
      
    }

    @Get(':id')
    getMessage(@Param('id') id){
        if(id == 1){
            return {
                message: 'Herzlich Willkommen auf DiseaseFinder.com'
                
            }
        }
        else{
            return{
                message: `some Message for ${id}`
            }
        }  
    }

    @Post()
    sendSymptoms(@Body() userinput: ClientDto){
        console.log(userinput.symptom);
        
        //Client gets sampleData for its input
        /*No use when actual disease can be find
        let sampleData = sampleCreator();
        console.log(sampleData);
        return {sampleData};
        */

        //Client gets actual disease for its input from filesystem
        return findDisease(userinput);

    }
}
