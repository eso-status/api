import { Status as EsoStatusStatus } from '@eso-status/types';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Archive } from '../../archive/entities/archive.entity';
import { Log } from '../../log/entities/log.entity';
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

  @OneToMany(() => Service, (service: Service) => service.status)
  services?: Service[];

  @OneToMany(() => Archive, (archive: Archive) => archive.status)
  archives?: Archive[];

  @OneToMany(() => Log, (log: Log) => log.status)
  logs?: Log[];
}
