import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { Color } from './entities/color.entity';

@Injectable()
export class ColorsService {
  constructor(
    @InjectRepository(Color)
    private readonly colorsRepository: Repository<Color>,
  ) {}

  async create(createColorDto: CreateColorDto): Promise<Color> {
    const color = this.colorsRepository.create(createColorDto);
    return this.colorsRepository.save(color);
  }

  async findAll(): Promise<Color[]> {
    return this.colorsRepository.find();
  }

  async findOne(id: number): Promise<Color> {
    const color = await this.colorsRepository.findOne({ where: { id } });
    if (!color) throw new NotFoundException(`Color ${id} not found`);
    return color;
  }

  async update(id: number, updateColorDto: UpdateColorDto): Promise<Color> {
    const color = await this.colorsRepository.preload({
      id,
      ...updateColorDto,
    });
    if (!color) throw new NotFoundException(`Color ${id} not found`);
    return this.colorsRepository.save(color);
  }

  async remove(id: number): Promise<Color> {
    const color = await this.findOne(id);
    await this.colorsRepository.remove(color);
    return color;
  }
}
