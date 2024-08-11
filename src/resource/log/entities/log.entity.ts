import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Connector } from '../../../type/connector.type';
import { Service } from '../../service/entities/service.entity';
import { Status } from '../../status/entities/status.entity';

@Entity({ synchronize: false })
export class Log {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id?: number;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: false,
  })
  connector: Connector;

  @Column({ type: 'int', nullable: false })
  serviceId?: number;

  @Column({ type: 'int', nullable: false })
  statusId?: number;

  @Column({ type: 'text', nullable: false })
  rawData: string;

  @CreateDateColumn({
    type: 'datetime',
    default: (): string => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date;

  @ManyToOne(() => Service, (service: Service) => service.logs)
  service?: Service;

  @ManyToOne(() => Status)
  status?: Status;
}
