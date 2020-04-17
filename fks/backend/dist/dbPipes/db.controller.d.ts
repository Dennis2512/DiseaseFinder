import { TestEntity } from './test.entity';
import { DbService } from './db.service';
export declare class DbController {
    private DbService;
    constructor(DbService: DbService);
    index(): Promise<TestEntity[]>;
    create(contactData: TestEntity): Promise<any>;
    update(id: any, contactData: TestEntity): Promise<any>;
    delete(id: any): Promise<any>;
}
