import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

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
          increment: 1,
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
          decrement: 1,
        },
      },
    })
  }  

}