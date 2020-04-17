import { Repository } from 'typeorm';
import { TestEntity } from './test.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class DbService {
    private testEntityRepository;
    constructor(testEntityRepository: Repository<TestEntity>);
    findAll(): Promise<TestEntity[]>;
    create(test: TestEntity): Promise<TestEntity>;
    update(test: TestEntity): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
    static isTest(testGuard: any): testGuard is TestEntity;
    static isTestUpdater(testGuard: any): boolean;
}
