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
let DiseaseDe = class DiseaseDe {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DiseaseDe.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DiseaseDe.prototype, "disease_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DiseaseDe.prototype, "disease_name_professional", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DiseaseDe.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 512 }),
    __metadata("design:type", Object)
], DiseaseDe.prototype, "symptoms", void 0);
DiseaseDe = __decorate([
    typeorm_1.Entity('DISEASE_DE')
], DiseaseDe);
exports.DiseaseDe = DiseaseDe;
//# sourceMappingURL=diseaseDe.entity.js.map