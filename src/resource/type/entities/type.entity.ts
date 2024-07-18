import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Slug } from '../../slug/entities/slug.entity';
import { Type as EsoStatusType } from '@eso-status/types';

@Entity({ synchronize: false })
export class Type {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 7,
    nullable: false,
  })
  type: EsoStatusType;

  @OneToMany(() => Slug, (slug) => slug.type)
  slugs?: Slug[];
}
