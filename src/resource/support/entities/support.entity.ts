import { Support as EsoStatusSupport } from '@eso-status/types';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Slug } from '../../slug/entities/slug.entity';

@Entity({ synchronize: false })
export class Support {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 6,
    nullable: false,
  })
  support: EsoStatusSupport;

  @OneToMany(() => Slug, slug => slug.support)
  slugs?: Slug[];
}
