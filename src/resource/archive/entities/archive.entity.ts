import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Connector } from '../../../type/connector.type';
import { Service } from '../../service/entities/service.entity';
import { Status } from '../../status/entities/status.entity';

@Entity({ synchronize: false })
export class Archive {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 7,
    nullable: false,
  })
  connector: Connector;

  @Column({ type: 'int', nullable: false })
  serviceId?: number;

  @Column({ type: 'int', nullable: false })
  statusId?: number;

  @Column({ type: 'text', nullable: false })
  rawData: string;

  @UpdateDateColumn({
    type: 'datetime',
    default: (): string => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date;

  @ManyToOne(() => Service, service => service.archives)
  service?: Service;

  @ManyToOne(() => Status)
  status?: Status;
}
