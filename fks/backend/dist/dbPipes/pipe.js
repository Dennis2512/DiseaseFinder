"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_entity_1 = require("./test.entity");
function testCreator() {
    let data1 = new (test_entity_1.TestEntity);
    data1.disease_name = "testdata1";
    data1.disease_name_professional = "testdata_professional1";
    data1.description = "testdata_description";
    data1.symptoms = "testdata_symptoms";
    console.log(data1);
}
;
testCreator();
//# sourceMappingURL=pipe.js.map