import {
  IsOptional,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSupplierDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  tradeName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  corporateName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  rg: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  stateRegistration: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  address: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  complement?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  state: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  postalCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  country: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  contact: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  commercialContact: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  bankContact: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  bankId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  checkingAccount: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  bankAgency: string;
}
