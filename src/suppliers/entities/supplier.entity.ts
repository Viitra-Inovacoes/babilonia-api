import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Bank } from '../../banks/entities/bank.entity';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'trade_name', type: 'varchar', length: 255 })
  tradeName: string;

  @Column({ name: 'corporate_name', type: 'varchar', length: 255 })
  corporateName: string;

  @Column({ name: 'cnpj', type: 'varchar', length: 20 })
  cnpj: string;

  @Column({ name: 'cpf', type: 'varchar', length: 15, nullable: true })
  cpf?: string;

  @Column({ name: 'rg', type: 'varchar', length: 20, nullable: true })
  rg?: string;

  @Column({
    name: 'state_registration',
    type: 'varchar',
    length: 50,
  })
  stateRegistration: string;

  @Column({ name: 'address', type: 'varchar', length: 255 })
  address: string;

  @Column({ name: 'complement', type: 'varchar', length: 255 })
  complement: string;

  @Column({ name: 'city', type: 'varchar', length: 150 })
  city: string;

  @Column({ name: 'state', type: 'varchar', length: 150 })
  state: string;

  @Column({ name: 'postal_code', type: 'varchar', length: 20 })
  postalCode: string;

  @Column({ name: 'country', type: 'varchar', length: 100 })
  country: string;

  @Column({ name: 'contact', type: 'varchar', length: 255 })
  contact: string;

  @Column({
    name: 'commercial_contact',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  commercialContact?: string;

  @Column({
    name: 'bank_contact',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  bankContact?: string;

  @Column({ name: 'notes', type: 'text', nullable: true })
  notes?: string;

  @ManyToOne(() => Bank, (bank) => bank.suppliers, {
    nullable: true,
    eager: true,
  })
  @JoinColumn({ name: 'bank_id' })
  bank?: Bank;

  @Column({
    name: 'checking_account',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  checkingAccount?: string;

  @Column({ name: 'bank_agency', type: 'varchar', length: 50, nullable: true })
  bankAgency?: string;
}
