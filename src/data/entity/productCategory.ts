import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Category } from './category';
import { Product } from './product';

@Entity()
export class ProductCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, product => product.productCategory, {onDelete: 'CASCADE'})
    product: Product[];

    @ManyToOne(() => Category, category => category.productCategory, {onDelete: 'CASCADE'})
    category: Category[];
}