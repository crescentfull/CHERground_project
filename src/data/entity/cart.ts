import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Product } from './product';
import { User } from './user';

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.cart)
    user: User[];

    @ManyToOne(() => Product, product => product.cart)
    product: Product[];

    @Column()
    quantity: number;
}