import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PraxisEntity {
  @PrimaryGeneratedColumn()
  praxisID: number;

  @Column()
  praxisName: string;

  @Column()
  ZipCpde: number;

  @Column({ default: false })
  isOpen: boolean;

  @Column()
  city: string;

  @Column()
  doctor: string;

  @Column()
  praxisSpefication: string;
}