import {
  IsOptional,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSupplierDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({
    example: 'Fornecedor ABC',
    description: 'Nome fantasia do fornecedor',
  })
  tradeName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({
    example: 'Fornecedor ABC Ltda',
    description: 'Razão social do fornecedor',
  })
  corporateName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({
    example: '00.000.000/0001-00',
    description: 'CNPJ do fornecedor',
  })
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  @ApiProperty({
    example: '000.000.000-00',
    description: 'CPF do fornecedor',
  })
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({
    example: '12.345.678-9',
    description: 'RG do fornecedor',
  })
  rg: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty({
    example: '123.456.789.000',
    description: 'Inscrição estadual',
  })
  stateRegistration: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({
    example: 'Rua das Flores, 123',
    description: 'Endereço do fornecedor',
  })
  address: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty({
    example: 'Sala 1',
    description: 'Complemento do endereço',
    required: false,
  })
  complement?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  @ApiProperty({
    example: 'São Paulo',
    description: 'Cidade do fornecedor',
  })
  city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  @ApiProperty({
    example: 'SP',
    description: 'Estado do fornecedor',
  })
  state: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({
    example: '01234-567',
    description: 'CEP do fornecedor',
  })
  postalCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({
    example: 'Brasil',
    description: 'País do fornecedor',
  })
  country: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({
    example: '(11) 98765-4321',
    description: 'Contato principal',
  })
  contact: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({
    example: '(11) 91234-5678',
    description: 'Contato comercial',
  })
  commercialContact: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({
    example: '(11) 99876-5432',
    description: 'Contato bancário',
  })
  bankContact: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'Observações adicionais sobre o fornecedor',
    description: 'Observações',
    required: false,
  })
  notes?: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @ApiProperty({
    example: 1,
    description: 'ID do banco',
  })
  bankId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty({
    example: '12345-6',
    description: 'Conta corrente',
  })
  checkingAccount: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty({
    example: '1234',
    description: 'Agência bancária',
  })
  bankAgency: string;
}
