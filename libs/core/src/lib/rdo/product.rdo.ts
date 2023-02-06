import { Guitar, GuitarString, GuitarType } from '@project/shared-types';
import { Expose } from 'class-transformer';

export class ProductRdo implements Guitar {
  @Expose()
  id!: string;

  @Expose()
  title!: string;

  @Expose()
  description!: string;

  @Expose()
  createdAt!: Date;

  //@Expose()
  image!: string;

  @Expose()
  type!: string;

  @Expose()
  article!: string;

  @Expose()
  stringCount!: string;

  @Expose()
  rating!: number;

  @Expose()
  price!: number;

  //@Expose()
  //reviewCount?: number | undefined;

}
