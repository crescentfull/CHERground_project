import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, JoinTable } from 'typeorm';
import { Product } from './product';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, product => product.image, {onDelete: 'CASCADE'})
    @JoinColumn()
    product: Product;

    @Column()
    imageUrl: string;
}