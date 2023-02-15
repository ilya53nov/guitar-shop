import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AccessTokenGuard } from '@project/core';
import { CartService } from './cart.service';

@UseGuards(AccessTokenGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}


  @Delete('product/:id')
  remove(@Param('id') productId: string) {
    return this.cartService.removeProduct(productId);
  }

  @Patch('product/increment/:id')
  incrementCount(@Param('id') productId: string) {
    return this.cartService.incrementCount(productId);
  }  

  @Patch('product/decrement/:id')
  decrementCount(@Param('id') productId: string) {
    return this.cartService.decrementCount(productId);
  }  
}
