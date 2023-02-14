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

  @Expose()
  image!: string;

  @Expose()
  type!: string;

  @Expose()
  article!: string;

  @Expose()
  stringCount!: number;

  @Expose()
  rating!: number;

  @Expose()
  price!: number;

  @Expose()
  cart!: any;

  //@Expose()
  //reviewCount?: number | undefined;

}
