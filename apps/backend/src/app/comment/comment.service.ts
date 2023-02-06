import { Injectable } from '@nestjs/common';
import { CommentRdo, CreateCommentDto, fillObject } from '@project/core';
import { CommentEntity } from './comment.entity';
import { CommentRepository } from './comment.repository';


@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  public async create(createCommentDto: CreateCommentDto) {    
    const commentEntity = await new CommentEntity(createCommentDto);

    const newComment = await this.commentRepository.create(commentEntity);

    return fillObject(CommentRdo, newComment);    
  }

  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }


}
