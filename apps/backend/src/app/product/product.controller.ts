import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, ProductValidation, UpdateProductDto } from '@project/core';
import { ApiResponse } from '@nestjs/swagger';
import { ApiRoute, ParametrKey } from '@project/shared-types';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller(ApiRoute.Product)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiResponse({
    type: CreateProductDto,
    status: HttpStatus.CREATED,
  })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(ParametrKey.Rout)
  findOne(@Param(ParametrKey.Id) id: string) {
    return this.productService.findOne(id);
  }

  @Patch(ParametrKey.Rout)
  update(@Param(ParametrKey.Id) id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(ParametrKey.Rout)
  remove(@Param(ParametrKey.Id) id: string) {
    return this.productService.remove(id);
  }

  @Post(`/${ApiRoute.UploadImage}`)
  @UseInterceptors(FileInterceptor(ParametrKey.File))
  //@UseGuards(AccessTokenGuard)
  public async uploadFile(
    //@GetUser(ParametrKey.Id) userId: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: ProductValidation.Image.fileType }),
        ],
      })
    )
    file: Express.Multer.File,
  ) {
    return this.productService.getImagePath(file.filename);
  }
}
