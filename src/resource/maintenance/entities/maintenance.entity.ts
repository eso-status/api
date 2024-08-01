import {
  Column,
  Entity,
  ManyToOne,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Service } from '../../service/entities/service.entity';

@Entity({ synchronize: false })
export class Maintenance {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({ type: 'int', nullable: false })
  serviceId?: number;

  @ManyToOne(() => Service, service => service.archives)
  service?: Service;

  @Column({ type: 'datetime', nullable: false })
  beginnerAt: Date;

  @Column({ type: 'datetime', nullable: false })
  endingAt: Date;

  @Column({ type: 'text', nullable: false })
  rawData: string;

  @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;
}
