import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('TEST_ENTITY')
export class TestEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  disease_name: string;

  @Column()
  disease_name_professional: string;

  @Column()
  description: string;

  //@Column( "varchar", {length: 512}) 
  //symptoms;

  @Column()
  symptoms: string;
}
