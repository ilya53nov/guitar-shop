import { Injectable } from '@nestjs/common';
import { Comment } from '@project/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: CommentEntity): Promise<Comment> {
    const entityData = item.toObject();

    return await this.prisma.comment.create({
      data: {...entityData},
    })
  }
  
  
}