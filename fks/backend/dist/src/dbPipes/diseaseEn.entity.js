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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let DiseaseEn = class DiseaseEn {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DiseaseEn.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DiseaseEn.prototype, "disease_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DiseaseEn.prototype, "disease_name_professional", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DiseaseEn.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 512 }),
    __metadata("design:type", Object)
], DiseaseEn.prototype, "symptoms", void 0);
DiseaseEn = __decorate([
    typeorm_1.Entity('DISEASE_EN')
], DiseaseEn);
exports.DiseaseEn = DiseaseEn;
//# sourceMappingURL=diseaseEn.entity.js.map