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
const test_entity_1 = require("./test.entity");
const db_service_1 = require("./db.service");
const common_2 = require("@nestjs/common");
let DbController = class DbController {
    constructor(DbService) {
        this.DbService = DbService;
    }
    index() {
        return this.DbService.findAll();
    }
    async create(contactData) {
        return this.DbService.create(contactData);
    }
    async update(id, contactData) {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id);
        return this.DbService.update(contactData);
    }
    async delete(id) {
        return this.DbService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DbController.prototype, "index", null);
__decorate([
    common_2.Post('create'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [test_entity_1.TestEntity]),
    __metadata("design:returntype", Promise)
], DbController.prototype, "create", null);
__decorate([
    common_2.Put(':id/update'),
    __param(0, common_2.Param('id')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, test_entity_1.TestEntity]),
    __metadata("design:returntype", Promise)
], DbController.prototype, "update", null);
__decorate([
    common_2.Delete(':id/delete'),
    __param(0, common_2.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DbController.prototype, "delete", null);
DbController = __decorate([
    common_1.Controller('db'),
    __metadata("design:paramtypes", [db_service_1.DbService])
], DbController);
exports.DbController = DbController;
//# sourceMappingURL=db.controller.js.map