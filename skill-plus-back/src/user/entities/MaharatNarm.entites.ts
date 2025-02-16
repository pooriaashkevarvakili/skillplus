import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MaharatNarm {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  img: string;
}