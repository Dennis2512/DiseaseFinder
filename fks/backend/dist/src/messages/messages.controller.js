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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const client_dto_1 = require("./client.dto");
const data = __importStar(require("./../../allDiseasesGER.json"));
var sampleData = '{ "Diseases" : [' +
    '{ "disease_name":"disease1" , "disease_name_professional":"disease1_professional1", "description":"disease1_description", "symptoms":"disease1_symptoms" },' +
    '{ "disease_name":"disease2" , "disease_name_professional":"disease2_professional1", "description":"disease2_description", "symptoms":"disease2_symptoms" },' +
    '{ "disease_name":"disease3" , "disease_name_professional":"disease3_professional1", "description":"disease3_description", "symptoms":"disease3_symptoms" }]}';
function sampleCreator() {
    return sampleData;
}
;
var matchingDiseases = new Array(10);
var asset = data;
console.log(typeof (asset));
function searchSymptom(symptomsToCheck, userinput) {
    let insertable;
    insertable = false;
    for (let element in (symptomsToCheck)) {
        let thisSymptomToCheck = symptomsToCheck[element];
        console.log(thisSymptomToCheck);
        if (thisSymptomToCheck === userinput.symptom) {
            insertable = true;
        }
    }
    ;
    console.log(insertable);
    return insertable;
}
function findDisease(userinput) {
    let i = 0;
    for (let diseaseValue in (asset)) {
        let disease = asset[diseaseValue];
        let symptomsToCheck = disease.symptoms;
        console.log(symptomsToCheck);
        console.log(typeof (symptomsToCheck));
        if (searchSymptom(symptomsToCheck, userinput) == true) {
            matchingDiseases[i] = disease;
            console.log(matchingDiseases);
            console.log("hat ein Match gefunden");
            i++;
        }
        else {
            console.log("hat kein Match gefunden");
        }
    }
    console.log("Matching diseases: " + matchingDiseases);
    if (matchingDiseases === null || matchingDiseases === undefined) {
        matchingDiseases = JSON.parse('{"message":"!!!hat keine Krankheit gefunden!!!"}');
    }
    console.log(matchingDiseases);
    return matchingDiseases;
}
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
        console.log(userinput.symptom);
        return findDisease(userinput);
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