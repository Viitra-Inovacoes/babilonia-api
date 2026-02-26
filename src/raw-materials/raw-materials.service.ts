import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RawMaterial } from './entities/raw-material.entity';
import { Repository } from 'typeorm';
import { RawMaterialResponseDto } from './dto/raw-material-response.dto';
import { Express } from 'express';
import { Unit } from 'src/units/entities/unit.entity';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { Color } from 'src/colors/entities/color.entity';
import { Location } from 'src/location/entities/location.entity';

@Injectable()
export class RawMaterialsService {
  constructor(
    @InjectRepository(RawMaterial)
    private readonly rawMaterialsRepository: Repository<RawMaterial>,
    @InjectRepository(Unit)
    private readonly unitsRepository: Repository<Unit>,
    @InjectRepository(Supplier)
    private readonly suppliersRepository: Repository<Supplier>,
    @InjectRepository(Color)
    private readonly colorsRepository: Repository<Color>,
    @InjectRepository(Location)
    private readonly locationsRepository: Repository<Location>,
    private readonly configService: ConfigService<Record<string, string>>,
  ) {}

  private buildImageUrl(image?: string | null): string | null {
    if (!image) return null;
    const normalized = image.includes('/') ? image : `raw-materials/${image}`;
    const baseUrl = this.configService.get<string>('BASE_URL') ?? '';
    return `${baseUrl}/${normalized}`;
  }
  async create(
    createRawMaterialDto: CreateRawMaterialDto,
    file?: Express.Multer.File,
  ) {
    if (file) {
      createRawMaterialDto.image = `uploads/raw-materials/${file.filename}`;
    }

    const unit = await this.unitsRepository.findOne({
      where: { id: createRawMaterialDto.unitId },
    });
    if (!unit) {
      throw new NotFoundException('Unidade de medida não encontrada');
    }

    const location = await this.locationsRepository.findOne({
      where: { id: createRawMaterialDto.locationId },
    });
    if (!location) {
      throw new NotFoundException('Localização de estoque não encontrada');
    }

    if (createRawMaterialDto.supplierId) {
      const supplier = await this.suppliersRepository.findOne({
        where: { id: createRawMaterialDto.supplierId as any },
      });
      if (!supplier) {
        throw new NotFoundException('Fornecedor não encontrado');
      }
    }

    if (createRawMaterialDto.colorId) {
      const color = await this.colorsRepository.findOne({
        where: { id: createRawMaterialDto.colorId },
      });
      if (!color) {
        throw new NotFoundException('Cor não encontrada');
      }
    }

    const rawMaterial =
      this.rawMaterialsRepository.create(createRawMaterialDto);
    return await this.rawMaterialsRepository.save(rawMaterial);
  }

  async findAll(): Promise<RawMaterialResponseDto[]> {
    const rawMaterials = await this.rawMaterialsRepository
      .createQueryBuilder('rawMaterial')
      .leftJoin('rawMaterial.unit', 'unit')
      .leftJoin('rawMaterial.supplier', 'supplier')
      .leftJoin('rawMaterial.color', 'color')
      .leftJoin('rawMaterial.location', 'location')
      .select([
        'rawMaterial.id AS id',
        'rawMaterial.code AS code',
        'rawMaterial.description AS description',
        'rawMaterial.unitId AS unitId',
        'rawMaterial.value AS value',
        'rawMaterial.stock AS stock',
        'rawMaterial.supplierId AS supplierId',
        'rawMaterial.colorId AS colorId',
        'rawMaterial.locationId AS locationId',
        'rawMaterial.width AS width',
        'rawMaterial.grammage AS grammage',
        'rawMaterial.composition AS composition',
        'rawMaterial.ncm AS ncm',
        'rawMaterial.type AS type',
        'rawMaterial.status AS status',
        'rawMaterial.active AS active',
        'rawMaterial.image AS image',
        'rawMaterial.observation AS observation',
        'unit.description AS unit_description',
        'supplier.tradeName AS supplier_trade_name',
        'color.description AS color_description',
        'location.location AS location_description',
      ])
      .getRawMany<RawMaterialResponseDto>();

    if (!rawMaterials || rawMaterials.length === 0) {
      throw new NotFoundException('Matéria-prima não encontrada');
    }

    return rawMaterials.map((rawMaterial) => ({
      ...rawMaterial,
      image: this.buildImageUrl(rawMaterial.image),
    }));
  }

  async findOne(id: string): Promise<RawMaterialResponseDto> {
    const rawMaterial = await this.rawMaterialsRepository
      .createQueryBuilder('rawMaterial')
      .leftJoin('rawMaterial.unit', 'unit')
      .leftJoin('rawMaterial.supplier', 'supplier')
      .leftJoin('rawMaterial.color', 'color')
      .leftJoin('rawMaterial.location', 'location')
      .where('rawMaterial.id = :id', { id })
      .select([
        'rawMaterial.id AS id',
        'rawMaterial.code AS code',
        'rawMaterial.description AS description',
        'rawMaterial.unitId AS unitId',
        'rawMaterial.value AS value',
        'rawMaterial.stock AS stock',
        'rawMaterial.supplierId AS supplierId',
        'rawMaterial.colorId AS colorId',
        'rawMaterial.locationId AS locationId',
        'rawMaterial.width AS width',
        'rawMaterial.grammage AS grammage',
        'rawMaterial.composition AS composition',
        'rawMaterial.ncm AS ncm',
        'rawMaterial.type AS type',
        'rawMaterial.status AS status',
        'rawMaterial.active AS active',
        'rawMaterial.image AS image',
        'rawMaterial.observation AS observation',
        'unit.description AS unit_description',
        'supplier.tradeName AS supplier_trade_name',
        'color.description AS color_description',
        'location.location AS location_description',
      ])
      .getRawOne<RawMaterialResponseDto>();

    if (!rawMaterial) {
      throw new NotFoundException(`Matéria-prima ${id} não encontrada`);
    }

    return {
      ...rawMaterial,
      image: this.buildImageUrl(rawMaterial.image),
    };
  }

  async update(
    id: string,
    updateRawMaterialDto: UpdateRawMaterialDto,
    file?: Express.Multer.File,
  ): Promise<RawMaterialResponseDto> {
    const exists = await this.rawMaterialsRepository.findOne({ where: { id } });
    if (!exists) {
      throw new NotFoundException(`Matéria-prima ${id} não encontrada`);
    }

    if (file) {
      updateRawMaterialDto.image = `raw-materials/${file.filename}`;
    }

    await this.rawMaterialsRepository.update(id, updateRawMaterialDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<RawMaterialResponseDto> {
    const rawMaterial = await this.findOne(id);

    await this.rawMaterialsRepository.delete(id);

    return rawMaterial;
  }
}
