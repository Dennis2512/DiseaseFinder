import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TestEntity } from './dbPipes/test.entity'
import  {PraxisEntity} from './dbPipes/praxis.entity'
import {DiseaseEntity} from './dbPipes/disease.entity'
import { DbModule } from './dbPipes/db.module';


@Module({
  imports: [
    //TypeOrmModule.forRoot({autoLoadEntities: true}),
    //DbModule
    TypeOrmModule.forRoot({autoLoadEntities: true}),
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService],

})
export class AppModule {
  constructor(private connection: Connection) {}
}
