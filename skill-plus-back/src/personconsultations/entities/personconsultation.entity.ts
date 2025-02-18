import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Personconsultation {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    title:string;
    @Column()
    img:string;
    @Column()
    description:string
}
