import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(() => Supplier, (supplier) => supplier.bank)
  suppliers: Supplier[];
}
