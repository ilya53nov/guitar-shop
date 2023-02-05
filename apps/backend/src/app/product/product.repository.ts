import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/core';
import { Guitar } from '@project/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository implements CRUDRepository<ProductEntity, string, Guitar> {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll(): Promise<Guitar[]> {
    return await this.prisma.product.findMany();
  }

  public async findById(id: string): Promise<Guitar> {
    return await this.prisma.product.findFirst({
      where: {
        id,
      },
      include: {
        comments: true,
      }
    });
  }
  public async create(item: ProductEntity): Promise<Guitar> {
    const entityData = item.toObject();

    return await this.prisma.product.create({
      data: {
        ...entityData,
        comments: {
          connect: [],
        }
      },
      include: {
        comments: true,
      }
    });
  }
  public async update(id: string, item: ProductEntity): Promise<Guitar> {
    const entityData = item.toObject();

    return await this.prisma.product.update({
      where:{
        id,
      },
      data: {
        ...entityData,
        comments: {
          connect: [],
        }
      },
      include: {
        comments: true,
      }
    });
  }
  public async destroy(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id,
      }
    });
  }
  
}