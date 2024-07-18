import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Zone } from '../../zone/entities/zone.entity';
import { Support } from '../../support/entities/support.entity';
import { Type } from '../../type/entities/type.entity';
import { Slug } from '../../slug/entities/slug.entity';
import { Status } from '../../status/entities/status.entity';

@Entity({ synchronize: false })
export class Service {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

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
