import { Comment } from '@project/shared-types';
import { Expose } from 'class-transformer';

export class CommentRdo implements Comment {
  @Expose()
  id!: string;

  @Expose()
  productId!: string;

  @Expose()
  authorId!: string;

  @Expose()
  rating!: number;

  @Expose()
  text!: string;

  @Expose()
  positive!: string;

  @Expose()
  negative!: string;

  @Expose()
  createdAt!: Date;
}
