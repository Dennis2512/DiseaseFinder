import { BaseEntity } from 'typeorm';
export declare class TestEntity extends BaseEntity {
    id: number;
    disease_name: string;
    disease_name_professional: string;
    description: string;
    symptoms: string;
}
