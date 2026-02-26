import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUnitDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
      example: 'Metro',
      description: 'Nome da unidade de medida',
    })
  description: string;
}
