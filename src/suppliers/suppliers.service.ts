import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bank } from 'src/banks/entities/bank.entity';
import { Supplier } from './entities/supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
// import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private readonly suppliersRepository: Repository<Supplier>,
    @InjectRepository(Bank)
    private readonly banksRepository: Repository<Bank>,
  ) {}

  async create(createSupplierDto: CreateSupplierDto) {
    return this.suppliersRepository.save(createSupplierDto);
  }

  async findAll() {
    return this.suppliersRepository.find();
  }

  async findOne(id: string) {
    const supplier = await this.suppliersRepository.findOne({ where: { id } });

    if (!supplier) {
      throw new NotFoundException(`Supplier ${id} not found`);
    }

    return supplier;
  }

  // async update(id: string, updateSupplierDto: UpdateSupplierDto) {
  //   const supplier = await this.findOne(id);

  //   const { bankId, ...data } = updateSupplierDto;

  //   const bank =
  //     bankId === undefined ? supplier.bank : await this.resolveBank(bankId);

  //   const merged = this.suppliersRepository.merge(supplier, data, { bank });

  //   return this.suppliersRepository.save(merged);
  // }

  async remove(id: string) {
    const supplier = await this.findOne(id);
    await this.suppliersRepository.remove(supplier);
    return { message: 'Supplier removed', id };
  }

  private async resolveBank(bankId?: number | null) {
    if (bankId === undefined || bankId === null) return null;

    const bank = await this.banksRepository.findOne({ where: { id: bankId } });

    if (!bank) {
      throw new NotFoundException(`Bank ${bankId} not found`);
    }

    return bank;
  }
}
