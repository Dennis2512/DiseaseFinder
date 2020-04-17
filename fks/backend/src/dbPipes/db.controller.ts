
import { Controller, Get } from '@nestjs/common';

import { TestEntity } from './test.entity';
import { DbService } from './db.service';

import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { Db } from 'typeorm';


@Controller('db')
export class DbController {
    constructor(private DbService: DbService){}
    //Test Entity 
    @Get()
    index(): Promise<TestEntity[]> {
        return this.DbService.findAll();
      }    

    @Post('create')
    async create(@Body() contactData: TestEntity): Promise<any> {
    return this.DbService.create(contactData);
    }  

    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: TestEntity): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.DbService.update(contactData);
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.DbService.delete(id);
    }  

    //DiseaseEn && DiseaseDe specific
    
    //Praxis specific
}
