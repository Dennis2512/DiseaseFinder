import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClientDto } from './client.dto';
import * as testdata from './../../test.json';
import * as data from './../../allDiseasesGER.json'
import { Interface } from 'readline';

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
var matchingDiseases:any[] = new Array ();
var asset = <any>data;

/**
 * 
 * @param symptomsToCheck 
 * @param userSearchterm
 * @returns {boolean} 
 */
function searchSymptom(symptomsToCheck: any, userSearchterm: string){
    let insertable: boolean;
    insertable = false;

    for (let element in (symptomsToCheck)) {
        //thisSymptomToCheck ist der jeweilige String, der auf den UserInput untersucht wird
        let thisSymptomToCheck = symptomsToCheck[element];

        if(thisSymptomToCheck === userSearchterm){
            insertable = true;
        } 
              
    };
    return insertable;
}
/**
 * 
 * @param userinput 
 * @param userSearchterm {string}
 * @returns {JSON}
 */
function findDisease(userinput: ClientDto){
    var userSearchterm: string;
    for(let k = 0; k < (Array(userinput.symptom)).length; k++){
        console.log(Object((userinput.symptom)[k]).itemName)
        userSearchterm = Object((userinput.symptom)[k]).itemName;


        //suche nach matches des userinputs in JSON des Asset ordners
        for (let diseaseValue in (asset)) {
            let disease = asset[diseaseValue];
            //symptomsToCheck ist ein Objekt in dem alle Symptome der Krankheit dieser Iteration sind
            let symptomsToCheck = disease.symptoms;

            if(searchSymptom(symptomsToCheck, userSearchterm) == true){
                
                matchingDiseases.push(disease);            
                console.log(matchingDiseases);
                console.log("hat ein Match gefunden");
            }else{
                //console.log("hat kein Match gefunden");
            }    
        }
    }

    //gebe alle Krankheiten zurück die in den Symptomen den einen oder mehrere Userinputs besitzen
    console.log("Matching diseases: " + matchingDiseases);
    if (matchingDiseases === null || matchingDiseases === undefined || matchingDiseases.length === 0){
        matchingDiseases = JSON.parse('{"message":"!!!hat keine Krankheit gefunden!!!"}');
    }
    console.log(matchingDiseases);
    //JSON.parse(matchingDiseases);
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
        /*No use when actual disease can be find
        //Client gets sampleData for its input
        let sampleData = sampleCreator();
        return {sampleData};
        */

        //Client gets actual disease for its input from filesystem
        return findDisease(userinput);

    }
}
