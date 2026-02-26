import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBankDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Santander',
    description: 'Nome da instituição financeira',
  })
  description: string;
}
