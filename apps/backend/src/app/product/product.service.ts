import { Injectable } from '@nestjs/common';
import { CreateProductDto, fillObject, ProductRdo, UpdateProductDto } from '@project/core';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async create(createProductDto: CreateProductDto) {    
    const productEntity = await new ProductEntity(createProductDto);

    const newProduct = await this.productRepository.create(productEntity);

    return fillObject(ProductRdo, newProduct);
  }

  public async findAll() {
    const products = await this.productRepository.findAll();

    return products.map((item) => fillObject(ProductRdo, item));
  }

  public async findOne(id: string) {
    const product = await this.productRepository.findById(id);

    return fillObject(ProductRdo, product);
  }

  public async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findById(id);
    const productEntity = await new ProductEntity({ ...product, ...updateProductDto});
    const updatedProduct = await this.productRepository.update(id, productEntity);

    return fillObject(ProductRdo, updatedProduct);
  }

  public async remove(id: string) {
    await this.productRepository.destroy(id);
  }
}
