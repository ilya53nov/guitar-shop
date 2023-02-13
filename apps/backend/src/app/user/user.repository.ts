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

  public async create(item: UserEntity): Promise<User> {
    const entityData = item.toObject();

    return await this.prisma.user.create({
      data: {...entityData},
    })
  }


}