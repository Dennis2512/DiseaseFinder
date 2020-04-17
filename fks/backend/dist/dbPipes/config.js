"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_entity_1 = require("./test.entity");
exports.mariadbConfig = {
    type: 'mariadb',
    host: "35.234.113.147",
    port: 3306,
    username: 'root',
    password: "diseasefinderdb",
    database: 'test',
    entities: [test_entity_1.TestEntity],
    synchronize: true,
    autoLoadEntities: true,
};
//# sourceMappingURL=config.js.map