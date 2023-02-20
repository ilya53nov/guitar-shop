import { Injectable } from '@nestjs/common';
import { User } from '@project/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findFirst({
      where: {
        email,
      }
    });
  }

  public async findById(id: string): Promise<User> {
    return await this.prisma.user.findFirst({
      where: {
        id,
      },
      include: {
        cart: true,
        _count: true,
      }
    });
  }

  public async create(item: UserEntity): Promise<User> {
    const entityData = item.toObject();

    return await this.prisma.user.create({
      data: {...entityData},
    })
  }

  public async addProductToCart(userId: string, productid: string) {  

    return await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        cart: {
          connectOrCreate: {
            where: {
              productId: productid,
            },
            create: {
              productId: productid,
            },              
          },
      
        },
        
      },
      include: {
        cart: true,
        _count: true,
      },

    })
  }


}