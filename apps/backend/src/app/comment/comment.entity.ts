import { Entity } from '@project/core';
import { Comment } from '@project/shared-types';

export class CommentEntity implements Entity<CommentEntity, Comment>, Comment {
  public id?: string;
  public authorId: string;
  public rating: number;
  public text: string;
  public positive: string;
  public negative: string;
  public createdAt?: Date;
  public productId: string;

  constructor(comment: Comment) {
    this.fillEntity(comment);
  }  

  public toObject(): CommentEntity {
    return {...this};
  }

  public fillEntity(entity: Comment): void {
    this.id = entity.id;
    this.authorId = entity.authorId;
    this.rating = entity.rating;
    this.text = entity.text;
    this.positive = entity.positive;
    this.negative = entity.negative;
    this.createdAt = entity.createdAt;
    this.productId = entity.productId;
  }
}
