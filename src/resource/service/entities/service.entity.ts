import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Archive } from '../../archive/entities/archive.entity';
import { Log } from '../../log/entities/log.entity';
import { Slug } from '../../slug/entities/slug.entity';
import { Status } from '../../status/entities/status.entity';
import { Support } from '../../support/entities/support.entity';
import { Type } from '../../type/entities/type.entity';
import { Zone } from '../../zone/entities/zone.entity';

@Entity({ synchronize: false })
export class Service {
  @PrimaryColumn({
    type: 'int',
  })
  id?: number;

  @Column({ type: 'int', nullable: false })
  slugId?: number;

  @Column({ type: 'int', nullable: false })
  statusId?: number;

  @Column({ type: 'int', nullable: false })
  typeId?: number;

  @Column({ type: 'int', nullable: false })
  supportId?: number;

  @Column({ type: 'int', nullable: false })
  zoneId?: number;

  @Column({ type: 'text', nullable: false })
  rawData: string;

  @UpdateDateColumn({
    type: 'datetime',
    default: (): string => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date;

  @ManyToOne(() => Slug)
  slug?: Slug;

  @ManyToOne(() => Status)
  status?: Status;

  @ManyToOne(() => Type)
  type?: Type;

  @ManyToOne(() => Support)
  support?: Support;

  @ManyToOne(() => Zone)
  zone?: Zone;

  @OneToMany(() => Archive, (archive: Archive) => archive.service)
  archives?: Archive[];

  @OneToMany(() => Log, (log: Log) => log.service)
  logs?: Log[];
}
