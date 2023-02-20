import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { CreateCommentDto } from '@project/core';
import { ApiRoute } from '@project/shared-types';
import { CommentService } from './comment.service';

@Controller(ApiRoute.Comment)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

}
