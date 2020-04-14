import { Module } from '@nestjs/common';
import { DbController } from './db.controller';
import { DbService } from './db.service';
import  {TypeOrmModule} from '@nestjs/typeorm'
import { TestEntity } from './test.entity';
import { DiseaseDe } from './diseaseDe.entity';
import { DiseaseEn } from './diseaseEn.entity';
import { Praxis } from './praxis.entity';

import { UpdateResult, DeleteResult } from  'typeorm';

@Module({
  controllers: [DbController],
  providers: [DbService]
})
export class DbModule {}

@Module({
  imports: [
    TypeOrmModule.forFeature([TestEntity]),
    TypeOrmModule.forFeature([DiseaseDe]),
    TypeOrmModule.forFeature([DiseaseEn]),
    TypeOrmModule.forFeature([Praxis]),
  ],
  providers: [DbService],
  controllers: [DbController]
})
export class ContactsModule {}

