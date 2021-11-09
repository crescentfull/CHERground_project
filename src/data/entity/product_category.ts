import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Category } from './category';
import { Product } from './product';

@Entity()
export class ProductCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, product => product.productCategory)
    product: Product[];

    @ManyToOne(() => Category, category => category.productCategory)
    category: Category[];
}