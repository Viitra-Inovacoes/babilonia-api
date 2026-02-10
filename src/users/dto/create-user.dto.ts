import { IsString, IsNotEmpty, MinLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'João Silva',
    description: 'Nome completo do usuário',
  })
  nome: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'joaosilva', description: 'Login do usuário' })
  login: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
    message:
      'A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais',
  })
  @ApiProperty({ example: 'P@ssw0rd123', description: 'Senha do usuário' })
  password: string;
}
