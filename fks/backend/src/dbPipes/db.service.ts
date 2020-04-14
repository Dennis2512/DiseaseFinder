import { Injectable } from '@nestjs/common';
import { Repository, In } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TestEntity } from './test.entity';
import { DiseaseEn } from './diseaseEn.entity';
import { DiseaseDe } from './diseaseDe.entity';
import { Praxis } from './praxis.entity';

import { UpdateResult, DeleteResult } from  'typeorm';
import { Test } from '@nestjs/testing';


@Injectable()
export class DbService {
    constructor(
        @InjectRepository(TestEntity)
        private testRepository: Repository<TestEntity>,

        @InjectRepository(DiseaseEn)
        private diseaseEnRepository: Repository<DiseaseEn>,

        @InjectRepository(DiseaseDe)
        private diseaseDeRepository: Repository<DiseaseDe>,

        @InjectRepository(Praxis)
        private praxisRepository: Repository<Praxis>,   
    ) { }

    async  findAll(): Promise<TestEntity[]> {
        return await this.testRepository.find();
    }

    async  create(test: TestEntity): Promise<TestEntity> {
        return await this.testRepository.save(test);
    }

    async update(test: TestEntity): Promise<UpdateResult> {
        return await this.testRepository.update(test.id, test);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.testRepository.delete(id);
    }
}