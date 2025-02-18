import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Application {
    @PrimaryGeneratedColumn()
    id?:number
    @Column()
    title:string;
    @Column()
    img:string;
}
