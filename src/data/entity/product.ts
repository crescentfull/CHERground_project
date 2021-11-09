import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Cart } from './cart';
import { Image } from './image';
import { Option } from './option';
import { ProductCategory } from './product_category';
import { Status } from './status';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    SKU: number;

    @Column()
    release_price: number;

    @Column()
    quantity: number;

    @OneToOne(() => Status, status => status.product)
    @JoinColumn()
    status: Status;

    @OneToMany(() => Image, image => image.product)
    image: Image[];

    @OneToMany(() => ProductCategory, productCategory => productCategory.product)
    productCategory: ProductCategory[];

    @OneToMany(() => Cart, cart => cart.product)
    cart: Cart[];

    @OneToMany(() => Option, option => option.product)
    option: Option[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}