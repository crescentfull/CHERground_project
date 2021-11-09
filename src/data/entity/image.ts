import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Product } from './product';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, product => product.image, {onDelete:'CASCADE'})
    product: Product[];

    @Column()
    imageUrl: string;
}