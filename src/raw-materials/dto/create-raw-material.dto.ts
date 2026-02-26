import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateRawMaterialDto {
  @IsString()
  @Length(1, 50)
  @ApiProperty({
    example: 'MP-001',
    description: 'Código da matéria-prima',
  })
  code: string;

  @IsString()
  @Length(1, 255)
  @ApiProperty({
    example: 'Tecido de Algodão Branco',
    description: 'Descrição da matéria-prima',
  })
  description: string;

  @Type(() => Number)
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'ID da unidade de medida',
  })
  unitId: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty({
    example: 25.5,
    description: 'Valor unitário',
  })
  value: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 3 })
  @ApiProperty({
    example: 100.0,
    description: 'Quantidade em estoque',
    required: false,
  })
  stock?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'ID do fornecedor',
    required: false,
  })
  supplierId: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'ID da cor',
    required: false,
  })
  colorId: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty({
    example: 1.5,
    description: 'Largura do material (m)',
    required: false,
  })
  width?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty({
    example: 200.5,
    description: 'Gramatura do material (g/m²)',
    required: false,
  })
  grammage?: number;

  @Type(() => Number)
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'ID da localização de estoque',
  })
  locationId: number;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty({
    example: '100% Algodão',
    description: 'Composição do material',
    required: false,
  })
  composition?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  @ApiProperty({
    example: '1234.56.78',
    description: 'Código NCM',
    required: false,
  })
  ncm?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  @ApiProperty({
    example: 'Tecido',
    description: 'Tipo do material',
    required: false,
  })
  type?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  @ApiProperty({
    example: 'Ativo',
    description: 'Status do material',
    required: false,
  })
  status?: string;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  @ApiProperty({
    example: 'Material sensível à luz solar',
    description: 'Observações gerais',
    required: false,
  })
  observation?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'https://exemplo.com/imagem.jpg',
    description: 'URL da imagem do material',
    required: false,
  })
  image?: string;
}
