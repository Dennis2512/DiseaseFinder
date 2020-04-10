import { Controller, Get, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    getMessages(){
      return {
          message: 'Hier kannst du die Symptome der Datenbank ziehen'
      }
    }

    @Get(':id')
    getMessage(@Param('id') id){
        return {
            message: `Hier ziehst du das spezielle Symptim mit id ${id}`
        }
    }
}
