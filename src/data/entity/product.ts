import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Cart } from './cart';
import { Category } from './category';
import { Image } from './image';
import { Options } from './options';
import { Status } from './status';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name?: string;

    @Column()
    description?: string;

    @Column()
    SKU?: number;

    @Column()
    releasePrice?: number;

    @Column()
    quantity?: number;

    @ManyToOne(() => Status, status => status.product, {onDelete: 'CASCADE'})
    status?: Status[];

    @OneToMany(() => Image, image => image.product)
    image?: Image[];

    @OneToMany(() => Category, category => category.product)
    category?: Category[];

    @OneToMany(() => Cart, cart => cart.product)
    cart?: Cart[];

    @OneToMany(() => Options, options => options.product)
    options?: Options[];

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}