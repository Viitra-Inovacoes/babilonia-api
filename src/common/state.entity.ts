import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Supplier } from '../suppliers/entities/supplier.entity';

@Entity('states')
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  uf: string;

  @OneToMany(() => Supplier, (supplier) => supplier.state)
  suppliers: Supplier[];
}
