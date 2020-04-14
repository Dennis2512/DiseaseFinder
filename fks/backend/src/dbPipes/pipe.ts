//Hier wird der SymptomInput an die Datenbank gesendet und die Daten an den Client zurück
import { getConnection } from "typeorm";
import { createConnection } from "typeorm";
import { TestEntity } from "./test.entity";
import { async } from "rxjs/internal/scheduler/async";
import { Test } from "@nestjs/testing";
//TEST
/*
(async () => {
    try {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into('TEST_ENTITY')
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

    }
})()

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