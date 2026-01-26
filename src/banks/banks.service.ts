import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Bank } from './entities/bank.entity';

@Injectable()
export class BanksService {
  constructor(
    @InjectRepository(Bank)
    private readonly banksRepository: Repository<Bank>,
  ) {}

  async create(createBankDto: CreateBankDto): Promise<Bank> {
    const bank = this.banksRepository.create(createBankDto);
    return this.banksRepository.save(bank);
  }

  async findAll(): Promise<Bank[]> {
    return this.banksRepository.find();
  }

  async findOne(id: number): Promise<Bank> {
    const bank = await this.banksRepository.findOne({ where: { id } });
    if (!bank) {
      throw new NotFoundException(`Bank #${id} not found`);
    }
    return bank;
  }

  async update(id: number, updateBankDto: UpdateBankDto): Promise<Bank> {
    const bank = await this.banksRepository.preload({ id, ...updateBankDto });
    if (!bank) {
      throw new NotFoundException(`Bank #${id} not found`);
    }
    return this.banksRepository.save(bank);
  }

  async remove(id: number): Promise<void> {
    const bank = await this.findOne(id);
    await this.banksRepository.remove(bank);
  }
}
