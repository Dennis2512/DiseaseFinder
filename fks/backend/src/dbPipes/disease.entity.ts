import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DiseaseEntity {
  @PrimaryGeneratedColumn()
  diseaseID: number;

  @Column()
  casualName: string;

  @Column()
  latinName: string;

  @Column()
  Symptoms: string;
}