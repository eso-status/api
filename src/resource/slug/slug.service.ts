import { Injectable } from '@nestjs/common';
import { Slug } from './entities/slug.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SlugService {
  constructor(
    @InjectRepository(Slug)
    private readonly slugRepository: Repository<Slug>,
  ) {}

  async findAll(): Promise<Slug[]> {
    return await this.slugRepository.find();
  }
}
