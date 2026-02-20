import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location = this.locationRepository.create(createLocationDto);
    return this.locationRepository.save(location);
  }

  findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  async findOne(id: number): Promise<Location> {
    const location = await this.locationRepository.findOne({ where: { id } });
    if (!location) {
      throw new NotFoundException(`Location with id ${id} not found`);
    }
    return location;
  }

  async update(
    id: number,
    updateLocationDto: UpdateLocationDto,
  ): Promise<Location> {
    const location = await this.findOne(id);
    const updated = this.locationRepository.merge(location, updateLocationDto);
    return this.locationRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const location = await this.findOne(id);
    await this.locationRepository.remove(location);
  }
}
