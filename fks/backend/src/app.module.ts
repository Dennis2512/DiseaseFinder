import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import {DbModule} from './dbPipes/db.module'

import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    //TypeOrmModule.forRoot({autoLoadEntities: true}),
    //DbModule
    TypeOrmModule.forRoot(),DbModule
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService],

})
export class AppModule {
  constructor(private connection: Connection) {}
}
