import { Injectable } from '@nestjs/common';
import { CreateProductDto, fillObject } from '@project/core';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async create(createProductDto: CreateProductDto) {    
    const productEntity = new ProductEntity(createProductDto);

    const newProduct = await this.productRepository.create(productEntity);

    return newProduct;
  }

  public async findAll() {
    const products = await this.productRepository.findAll();

    return products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
