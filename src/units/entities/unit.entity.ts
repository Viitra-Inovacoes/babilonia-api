import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
