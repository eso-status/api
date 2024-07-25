import { Status as EsoStatusStatus } from '@eso-status/types';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Archive } from '../../archive/entities/archive.entity';
import { Service } from '../../service/entities/service.entity';

@Entity({ synchronize: false })
export class Status {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 7,
    nullable: false,
  })
  status: EsoStatusStatus;

  @OneToMany(() => Service, service => service.slug)
  services?: Service[];

  @OneToMany(() => Archive, archive => archive.slug)
  archives?: Archive[];
}
