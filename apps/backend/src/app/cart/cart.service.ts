import { Injectable } from '@nestjs/common';
import { CartRepository } from './cart.repository';

@Injectable()
export class CartService {
  constructor(private readonly cartRepository: CartRepository) {}

  public async removeProduct(productId: string) {
    await this.cartRepository.removeProduct(productId);
  }

  public async incrementCount(productId: string) {
    return await this.cartRepository.incrementCount(productId);
  }

  public async decrementCount(productId: string) {
    return await this.cartRepository.decrementCount(productId);
  }
}
