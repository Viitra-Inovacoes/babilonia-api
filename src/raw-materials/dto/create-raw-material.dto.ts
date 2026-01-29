import { Type } from 'class-transformer';
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
  code: string;

  @IsString()
  @Length(1, 255)
  description: string;

  @Type(() => Number)
  @IsInt()
  unitId: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  value: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 3 })
  stock?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  supplierId: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  colorId: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  width?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  grammage?: number;

  @IsString()
  @Length(1, 255)
  location: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  composition?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  ncm?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  type?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  status?: string;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  observation?: string;

  @IsOptional()
  @IsString()
  image?: string;
}
