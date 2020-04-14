import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DiseaseDe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  disease_name: string;

  @Column()
  disease_name_professional: string;

  @Column()
  description: string;

  @Column()
  symptoms: Array<string>;
}