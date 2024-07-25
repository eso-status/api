import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Service } from '../../service/entities/service.entity';
import { Slug } from '../../slug/entities/slug.entity';
import { Status } from '../../status/entities/status.entity';
import { Support } from '../../support/entities/support.entity';
import { Type } from '../../type/entities/type.entity';
import { Zone } from '../../zone/entities/zone.entity';

@Entity({ synchronize: false })
export class Archive {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({ type: 'int', nullable: false })
  slugId?: number;

  @Column({ type: 'int', nullable: false })
  serviceId?: number;

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

  @CreateDateColumn({
    type: 'datetime',
    default: (): string => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date;

  @ManyToOne(() => Service)
  service?: Service;

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
}
