import {
  Controller,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AccessTokenGuard } from '@project/core';
import { ApiRoute, ParametrKey } from '@project/shared-types';
import { CartService } from './cart.service';

@UseGuards(AccessTokenGuard)
@Controller(ApiRoute.Cart)
export class CartController {
  constructor(private readonly cartService: CartService) {}


  @Delete(`${ApiRoute.Product}/${ParametrKey.Rout}`)
  remove(@Param(ParametrKey.Id) productId: string) {
    return this.cartService.removeProduct(productId);
  }

  @Patch(`${ApiRoute.Product}/${ApiRoute.Increment}/${ParametrKey.Rout}`)
  incrementCount(@Param(ParametrKey.Id) productId: string) {
    return this.cartService.incrementCount(productId);
  }  

  @Patch(`${ApiRoute.Product}/${ApiRoute.Decrement}/${ParametrKey.Rout}`)
  decrementCount(@Param(ParametrKey.Id) productId: string) {
    return this.cartService.decrementCount(productId);
  }  
}
