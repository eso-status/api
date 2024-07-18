import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Slug } from '../../slug/entities/slug.entity';

@Entity({ synchronize: false })
export class Zone {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 7,
    nullable: false,
  })
  zone: string;

  @OneToMany(() => Slug, (slug) => slug.zone)
  slugs?: Slug[];
}
