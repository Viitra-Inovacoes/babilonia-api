import { ApiProperty } from '@nestjs/swagger';

export class RawMaterialResponseDto {
  @ApiProperty({
    example: 1,
    description: 'ID da matéria-prima',
  })
  id: number;

  @ApiProperty({
    example: 'MP-001',
    description: 'Código da matéria-prima',
  })
  code: string;

  @ApiProperty({
    example: 'Tecido de Algodão',
    description: 'Descrição da matéria-prima',
  })
  description: string;

  @ApiProperty({
    example: 25.5,
    description: 'Valor unitário',
  })
  value: number;

  @ApiProperty({
    example: 100.0,
    description: 'Quantidade em estoque',
    required: false,
  })
  stock?: number;

  @ApiProperty({
    example: 'Fornecedor ABC',
    description: 'Nome do fornecedor',
    required: false,
    nullable: true,
  })
  supplier?: string | null;

  @ApiProperty({
    example: 'Azul',
    description: 'Cor da matéria-prima',
    required: false,
    nullable: true,
  })
  color?: string | null;

  @ApiProperty({
    example: 1.5,
    description: 'Largura (m)',
    required: false,
  })
  width?: number;

  @ApiProperty({
    example: 200.5,
    description: 'Gramatura (g/m²)',
    required: false,
  })
  grammage?: number;

  @ApiProperty({
    example: 1,
    description: 'ID da localização',
  })
  locationId: number;

  @ApiProperty({
    example: '100% Algodão',
    description: 'Composição',
    required: false,
  })
  composition?: string;

  @ApiProperty({
    example: '1234.56.78',
    description: 'NCM',
    required: false,
  })
  ncm?: string;

  @ApiProperty({
    example: 'Tecido',
    description: 'Tipo de material',
    required: false,
  })
  type?: string;

  @ApiProperty({
    example: 'Disponível',
    description: 'Status',
    required: false,
  })
  status?: string;

  @ApiProperty({
    example: true,
    description: 'Se o cadastro está ativo',
  })
  active: boolean;

  @ApiProperty({
    example: 'Material delicado',
    description: 'Observações',
    required: false,
  })
  observation?: string;

  @ApiProperty({
    example: 'https://imagem.com/foto.jpg',
    description: 'URL da imagem',
    required: false,
    nullable: true,
  })
  image?: string | null;

  @ApiProperty({
    example: 'Metros',
    description: 'Descrição da unidade de medida',
    required: false,
  })
  unit_description?: string;

  @ApiProperty({
    example: 'Fornecedor ABC Ltda',
    description: 'Nome fantasia do fornecedor',
    required: false,
  })
  supplier_trade_name?: string;

  @ApiProperty({
    example: 'Azul Marinho',
    description: 'Descrição da cor',
    required: false,
  })
  color_description?: string;

  @ApiProperty({
    example: 'Depósito Central',
    description: 'Descrição da localização',
    required: false,
  })
  location_description?: string;
}
