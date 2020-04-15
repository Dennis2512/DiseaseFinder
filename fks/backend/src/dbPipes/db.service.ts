import { Injectable, ShutdownSignal } from '@nestjs/common';
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

    //CRUD Functions for TestEntity
    async  findAll(): Promise<TestEntity[]> {
        return await this.testRepository.find();
    }

    async  create(test: TestEntity): Promise<TestEntity> {
        let createTest = new TestEntity;
        createTest.disease_name = test.disease_name;
        createTest.disease_name_professional = test.disease_name_professional;
        createTest.description = test.description;
        createTest.symptoms = test.symptoms;
        return await this.testRepository.save(createTest);
    }

    async update(test: TestEntity): Promise<UpdateResult> {
        return await this.testRepository.update(test.id, test);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.testRepository.delete(id);
    }

    //CRUD Functions for DiseaseEn
    //CRUD Functions for DiseaseDE
    //CRUD Functions for Praxis

    //TYPE-GUARDS for runtime type checking
    static isTest(test: any): test is TestEntity {
        return typeof test === 'object'
            && typeof test.disease_name === 'string'
            && typeof test.disease_name_professional === 'string'
            && typeof test.description === 'string'
            && typeof test.symptoms == 'string'
    }
    static isTestUpdater(test: any): boolean {
        return test;
    }
}