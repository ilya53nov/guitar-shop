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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiRoute, ParametrKey } from '@project/shared-types';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('product')
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
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
