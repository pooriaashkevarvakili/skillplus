import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LearnOnline {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    title:string
    @Column()
    description:string
    @Column()
    img:string
}
