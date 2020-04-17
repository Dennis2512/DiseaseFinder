import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClientDto } from './client.dto';

//Test hardcoded 
var sampleData = '{ "Diseases" : [' +
'{ "disease_name":"disease1" , "disease_name_professional":"disease1_professional1", "description":"disease1_description", "symptoms":"disease1_symptoms" },' +
'{ "disease_name":"disease2" , "disease_name_professional":"disease2_professional1", "description":"disease2_description", "symptoms":"disease2_symptoms" },' +
'{ "disease_name":"disease3" , "disease_name_professional":"disease3_professional1", "description":"disease3_description", "symptoms":"disease3_symptoms" }]}';
function  minCreator1(){
    console.log(sampleData);
    return sampleData;

};

function minFindDisease(userinput: string){
    //suche nach matches des userinputs in JSON des Asset ordners
    //gebe alle Krankheiten zurück die in den Symptomen den einen oder mehrere Userinputs besitzen
    return;

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
        console.log(userinput);
        
        //Client gets sampleData for its input
        let sampleData = minCreator1();
        console.log(sampleData);
        return {sampleData};

        //Client gets actual disease for its input
        //return minFindDisease(userinput);

    }
}
