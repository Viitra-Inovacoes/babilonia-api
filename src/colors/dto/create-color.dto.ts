import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateColorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Azul Marinho',
    description: 'Nome da cor',
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Azul do mar',
    description: 'Nome da cor de acordo com o fornecedor',
  })
  supplierDescription: string;
}
