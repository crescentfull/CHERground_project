import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, JoinTable } from 'typeorm';
import { Product } from './product';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, product => product.image)
    @JoinColumn()
    product: Product;
    // @Column()
    // productId: string;

    @Column()
    imageUrl: string;
}