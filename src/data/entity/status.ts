import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany } from 'typeorm';
import { Product } from './product';

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'boolean', default: false})
    name: boolean;

    @OneToMany(() => Product, product => product.status)
    product: Product[];
}