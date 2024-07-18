import { Injectable } from '@nestjs/common';
import { Support } from './entities/support.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(Support)
    private readonly supportRepository: Repository<Support>,
  ) {}

  async findAll(): Promise<Support[]> {
    return await this.supportRepository.find({
      relations: ['slugs'],
    });
  }
}
