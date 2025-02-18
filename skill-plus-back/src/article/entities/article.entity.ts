import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id?:number
    @Column()
    img:string;
    @Column()
    title:string
}
