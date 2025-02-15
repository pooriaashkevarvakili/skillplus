import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    email: string
    @Column()
    family: string
    @Column()
    password: string
    @Column()
    name: string
    @Column()
    username: string
}
