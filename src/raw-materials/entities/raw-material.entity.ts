import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Unit } from 'src/units/entities/unit.entity';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { Color } from 'src/colors/entities/color.entity';
import { Location } from 'src/location/entities/location.entity';

@Entity()
export class RawMaterial {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 50 })
  code: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => Unit, { nullable: false })
  @JoinColumn({ name: 'unitId' })
  unit: Unit;

  @Column({ nullable: false })
  unitId: number;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  value: number;

  @Column({
    type: 'decimal',
    precision: 15,
    scale: 3,
    nullable: true,
  })
  stock?: number;

  @ManyToOne(() => Supplier, { nullable: true })
  @JoinColumn({ name: 'supplierId' })
  supplier?: Supplier;

  @Column({ nullable: false })
  supplierId: number;

  @ManyToOne(() => Color, { nullable: true })
  @JoinColumn({ name: 'colorId' })
  color?: Color;

  @Column({ nullable: true })
  colorId?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  width?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  grammage?: number;

  @Column({ nullable: false })
  locationId: number;

  @ManyToOne(() => Location, { nullable: false })
  @JoinColumn({ name: 'locationId' })
  location: Location;

  @Column({ type: 'varchar', length: 255, nullable: true })
  composition?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  ncm?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  type?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  status?: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'varchar', length: 500, nullable: true })
  observation?: string;

  @Column({
    type: 'varchar',
    length: 500,
    nullable: true,
  })
  image?: string;
}
