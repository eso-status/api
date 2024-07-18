import { Column, Entity, PrimaryColumn } from 'typeorm';

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
  slug: string;
}
