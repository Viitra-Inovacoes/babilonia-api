import { Injectable } from '@nestjs/common';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RawMaterial } from './entities/raw-material.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RawMaterialsService {
  constructor(
    @InjectRepository(RawMaterial)
    private readonly rawMaterialsRepository: Repository<RawMaterial>,
  ) {}
  async create(createRawMaterialDto: CreateRawMaterialDto) {
    return await this.rawMaterialsRepository.save(createRawMaterialDto);
  }

  findAll() {
    return `This action returns all rawMaterials`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rawMaterial`;
  }

  update(id: number, updateRawMaterialDto: UpdateRawMaterialDto) {
    return `This action updates a #${id} rawMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} rawMaterial`;
  }
}
