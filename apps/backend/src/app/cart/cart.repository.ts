import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DEFAULT_COUNT_CHANGE } from './cart.constants';

@Injectable()
export class CartRepository  {
  constructor(private readonly prisma: PrismaService) {}

  public async removeProduct(productId: string) {
    await this.prisma.cart.delete({
      where: {
        productId: productId,
      },
    });
  }

  public async incrementCount(productId: string) {
    return await this.prisma.cart.update({
      where: {
        productId,
      },
      data: {
        count: {
          increment: DEFAULT_COUNT_CHANGE,
        },
      },
    })
  }

  public async decrementCount(productId: string) {
    return await this.prisma.cart.update({
      where: {
        productId,
      },
      data: {
        count: {
          decrement: DEFAULT_COUNT_CHANGE,
        },
      },
    })
  }  

}
