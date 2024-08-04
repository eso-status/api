import { Zone as EsoStatusZone } from '@eso-status/types';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Service } from '../../service/entities/service.entity';
import { Slug } from '../../slug/entities/slug.entity';

@Entity({ synchronize: false })
export class Zone {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 7,
    nullable: false,
  })
  zone: EsoStatusZone;

  @OneToMany(() => Slug, (slug: Slug) => slug.zone)
  slugs?: Slug[];

  @OneToMany(() => Service, (service: Service) => service.zone)
  services?: Service[];
}
