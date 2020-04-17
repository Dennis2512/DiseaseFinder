"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const test_entity_1 = require("./test.entity");
const data1 = `INSERT INTO TEST_ENTITY(disease_name, disease_name_professional, description, symptoms) VALUES ('testName', 'testName_professional', 'testDescription', 'testSymptoms')`;
let DbService = class DbService {
    constructor(testEntityRepository) {
        this.testEntityRepository = testEntityRepository;
    }
    async findAll() {
        return await this.testEntityRepository.find();
    }
    async create(test) {
        let createTest = new test_entity_1.TestEntity;
        createTest.disease_name = test.disease_name;
        createTest.disease_name_professional = test.disease_name_professional;
        createTest.description = test.description;
        createTest.symptoms = test.symptoms;
        return await this.testEntityRepository.save(createTest);
    }
    async update(test) {
        return await this.testEntityRepository.update(test.id, test);
    }
    async delete(id) {
        return await this.testEntityRepository.delete(id);
    }
    static isTest(testGuard) {
        return typeof testGuard === 'object'
            && typeof testGuard.disease_name === 'string'
            && typeof testGuard.disease_name_professional === 'string'
            && typeof testGuard.description === 'string'
            && typeof testGuard.symptoms == 'string';
    }
    static isTestUpdater(testGuard) {
        return testGuard;
    }
};
DbService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(test_entity_1.TestEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DbService);
exports.DbService = DbService;
//# sourceMappingURL=db.service.js.map