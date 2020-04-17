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
const client_dto_1 = require("./client.dto");
var sampleData = '{ "Diseases" : [' +
    '{ "disease_name":"diseas1" , "disease_name_professional":"diseas1_professional1", "description":"diseas1_description", "symptoms":"diseas1_symptoms" },' +
    '{ "disease_name":"diseas2" , "disease_name_professional":"diseas2_professional1", "description":"diseas2_description", "symptoms":"diseas2_symptoms" },' +
    '{ "disease_name":"diseas3" , "disease_name_professional":"diseas3_professional1", "description":"diseas3_description", "symptoms":"diseas3_symptoms" }]}';
function minCreator1() {
    console.log(sampleData);
    return sampleData;
}
;
let MessagesController = class MessagesController {
    getSymptoms() {
        return {
            message: 'Hier kannst du die Symptome der Datenbank ziehen',
        };
    }
    getMessage(id) {
        if (id == 1) {
            return {
                message: 'Herzlich Willkommen auf DiseaseFinder.com'
            };
        }
        else {
            return {
                message: `some Message for ${id}`
            };
        }
    }
    sendSymptoms(userinput) {
        console.log(userinput);
        let sampleData = minCreator1();
        console.log(sampleData);
        return { sampleData };
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "getSymptoms", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "getMessage", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_dto_1.ClientDto]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "sendSymptoms", null);
MessagesController = __decorate([
    common_1.Controller('messages')
], MessagesController);
exports.MessagesController = MessagesController;
//# sourceMappingURL=messages.controller.js.map