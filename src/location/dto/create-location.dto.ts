import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLocationDto {
  @ApiProperty({
      example: 'Setor 1-A',
      description: 'Nome da localização',
  })
  @IsString()
  @IsNotEmpty()
  location: string;
}
