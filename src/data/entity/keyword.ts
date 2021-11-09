import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Option } from './option';
import { Product } from './product';

@Entity()
export class Keyword {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Option, option => option.keyword)
    option: Option[];

    @Column()
    name: string;
}