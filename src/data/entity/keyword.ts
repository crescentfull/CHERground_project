import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Options } from './options';
import { Product } from './product';

@Entity()
export class Keyword {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Options, options => options.keyword, {onDelete: 'CASCADE'})
    options: Options[];

    @Column()
    name: string;
}