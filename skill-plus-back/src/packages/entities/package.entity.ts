import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Package {
    @PrimaryGeneratedColumn()
    id?:number
    @Column()
    title:string;
    @Column()
    description:string
}
