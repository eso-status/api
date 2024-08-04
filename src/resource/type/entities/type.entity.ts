import { Type as EsoStatusType } from '@eso-status/types';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Service } from '../../service/entities/service.entity';
import { Slug } from '../../slug/entities/slug.entity';

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

  @OneToMany(() => Slug, (slug: Slug) => slug.type)
  slugs?: Slug[];

  @OneToMany(() => Service, (service: Service) => service.type)
  services?: Service[];
}
