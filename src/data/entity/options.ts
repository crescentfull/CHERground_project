import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { Keyword } from './keyword';
import { Product } from './product';

@Entity()
export class Options {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, product => product.option )
    product: Product[];

    @OneToMany(() => Keyword, keyword => keyword.option)
    keyword: Keyword[];

    @Column()
    name: string;
}