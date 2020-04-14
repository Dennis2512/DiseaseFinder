import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TEST_ENTITY')
export class TestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}