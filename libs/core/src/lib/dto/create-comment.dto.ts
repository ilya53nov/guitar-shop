import { Comment } from '@project/shared-types'
import { IsNumber, IsString, IsUUID, Length, Max, Min } from 'class-validator';
import { CommentValidation } from '../validation/comment.validation';

export class CreateCommentDto implements Comment {
  @IsUUID()
  productId!: string;

  @IsUUID()
  authorId!: string;

  @IsNumber()
  @Min(CommentValidation.Rating.min)
  @Max(CommentValidation.Rating.max)
  rating!: number;

  @IsString()
  @Length(CommentValidation.TextLength.min, CommentValidation.TextLength.max)
  text!: string;

  @IsString()
  @Length(CommentValidation.PositiveLength.min, CommentValidation.PositiveLength.max)
  positive!: string;

  @IsString()
  @Length(CommentValidation.NegativeLength.min, CommentValidation.NegativeLength.max)
  negative!: string;
}
