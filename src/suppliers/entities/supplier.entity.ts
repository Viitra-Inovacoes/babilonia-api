import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { State } from '../../common/state.entity';
import { Bank } from 'src/banks/entities/bank.entity';

@Entity({ name: 'suppliers' })
export class Supplier {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'code', type: 'varchar', length: 50, unique: true })
  code: string;

  @Column({ name: 'trade_name', type: 'varchar', length: 255 })
  tradeName: string;

  @Column({ name: 'corporate_name', type: 'varchar', length: 255 })
  corporateName: string;

  @Column({ name: 'cnpj', type: 'varchar', length: 20, nullable: true })
  cnpj?: string;

  @Column({ name: 'cpf', type: 'varchar', length: 15, nullable: true })
  cpf?: string;

  @Column({ name: 'rg', type: 'varchar', length: 20, nullable: true })
  rg?: string;

  @Column({
    name: 'state_registration',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  stateRegistration?: string;

  @Column({ name: 'address', type: 'varchar', length: 255, nullable: true })
  address?: string;

  @Column({ name: 'complement', type: 'varchar', length: 255, nullable: true })
  complement?: string;

  @Column({ name: 'city', type: 'varchar', length: 150, nullable: true })
  city?: string;

  @ManyToOne(() => State, { nullable: true })
  @JoinColumn({ name: 'state_id' })
  state?: State;

  @Column({ name: 'postal_code', type: 'varchar', length: 20, nullable: true })
  postalCode?: string;

  @Column({ name: 'country', type: 'varchar', length: 100, nullable: true })
  country?: string;

  @Column({ name: 'contact', type: 'varchar', length: 255, nullable: true })
  contact?: string;

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

  @ManyToOne(() => Bank, (bank) => bank.suppliers)
  @JoinColumn({ name: 'bank_id' })
  bank: Bank;

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
