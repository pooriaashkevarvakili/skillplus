import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SoftSkillProgramming {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    title:string;
    @Column()
    img:string;
    @Column()
    description:string
}
