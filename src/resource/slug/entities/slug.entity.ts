import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Type } from '../../type/entities/type.entity';
import { Zone } from '../../zone/entities/zone.entity';
import { Support } from '../../support/entities/support.entity';
import { Slug as EsoStatusSlug } from '@eso-status/types';

@Entity({ synchronize: false })
export class Slug {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 22,
    nullable: false,
  })
  slug: EsoStatusSlug;

  @Column({ type: 'int', nullable: false })
  typeId?: number;

  @Column({ type: 'int', nullable: false })
  supportId?: number;

  @Column({ type: 'int', nullable: false })
  zoneId?: number;

  @ManyToOne(() => Type)
  type?: Type;

  @ManyToOne(() => Support)
  support?: Support;

  @ManyToOne(() => Zone)
  zone?: Zone;
}
