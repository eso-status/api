import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Status as EsoStatusStatus } from '@eso-status/types';
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

  @OneToMany(() => Service, (service) => service.slug)
  service?: Service[];
}
