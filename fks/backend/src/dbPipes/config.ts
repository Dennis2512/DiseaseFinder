import  {TestEntity} from "./test.entity"
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as path from 'path'
//import * as fs from 'fs-sync'



export const mariadbConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: "35.234.113.147",
    port: 3306,
    username: 'root',
    password: "diseasefinderdb",
    database: 'test',
    entities: [TestEntity],
    synchronize: true,
    autoLoadEntities: true,
}

