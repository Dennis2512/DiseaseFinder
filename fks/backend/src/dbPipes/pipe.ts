//Hier wird der SymptomInput an die Datenbank gesendet und die Daten an den Client zurück

import { getConnection } from "typeorm";
import { createConnection } from "typeorm";
import { TestEntity } from "./test.entity";
import { async } from "rxjs/internal/scheduler/async";
import { Test } from "@nestjs/testing";
import { DbModule } from "./db.module"
import { create } from "domain";
import {DbService} from "./db.service"
//TEST
/*
function  testCreator(){
    let data1  = new (TestEntity);
    data1.disease_name = "testdata1";
    data1.disease_name_professional = "testdata_professional1";
    data1.description = "testdata_description";
    data1.symptoms = "testdata_symptoms"
    console.log(data1);

};
testCreator();
//const statementInsertTableLedger = `INSERT INTO ledger (id, date, amount, sender, receiver) VALUES ('p2pidp2p', 'p2pdatep2p', 'p2pamountp2p', 'p2psenderp2p','p2preceiverp2p')`
*//*
(async () => {
    let data1  = new (TestEntity);
    data1.disease_name = "testdata1";
    data1.disease_name_professional = "testdata_professional1";
    data1.description = "testdata_description";
    data1.symptoms = "testdata_symptoms"
    this.testEntityRepository.create(data1);
})();
(async () => {
    try {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(TestEntity)
            .values([
                {disease_name: "Test_disease_Name1"},
                {disease_name_professional: "Test_disease_name_professional1"},
                {description: "Test_discription1"},
                {symptoms: "Test_Symptom1"},//{ "Test_Symptom": "Symptom1" , "TestSymptom": "Symptom2"}
                
                //{disease_name: "Test_disease_Name2"},
                //{disease_name_professional: "Test_disease_name_professional2"},
                //{description: "Test_discription2"},
                //{symptoms: "Test_Symptom2"},//{ "Test_Symptom": "Symptom1" , "TestSymptom": "Symptom2"}
            ])
            .execute();
        } catch (err) {
            console.log(err);
        }finally{
            console.log("Daten wurden eingefügt");
        }
})()*/


/*
createConnection()
    .then(async conn =>{
        const sympt1 = await TestEntity
            .create({disease_name: "Test_disease_Name1",
                     disease_name_professional: "Test_disease_name_professional1",
                     description: "Test_discription2",
                     symptoms: "Test_Symptom2"})
                     .save();
    })
    
*/