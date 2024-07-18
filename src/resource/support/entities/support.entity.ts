import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Slug } from '../../slug/entities/slug.entity';

@Entity({ synchronize: false })
export class Support {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 6,
    nullable: false,
  })
  support: string;

  @OneToMany(() => Slug, (slug) => slug.support)
  slugs?: Slug[];
}
