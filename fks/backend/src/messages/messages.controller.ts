import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClientDto } from '../messages/user.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    getSymptoms(){
      return {
          message: 'Hier kannst du die Symptome der Datenbank ziehen'
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
    sendSymptoms(@Body() user: ClientDto){
        console.log(user);
        return user;
    }
}
