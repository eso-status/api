import { Support as EsoStatusSupport } from '@eso-status/types';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Archive } from '../../archive/entities/archive.entity';
import { Service } from '../../service/entities/service.entity';
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

  @OneToMany(() => Service, service => service.slug)
  services?: Service[];

  @OneToMany(() => Archive, archive => archive.slug)
  archives?: Archive[];
}
