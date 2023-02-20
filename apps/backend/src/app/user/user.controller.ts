import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AccessTokenGuard, CreateUserDto, GetUser, LoginUserDto } from '@project/core';
import { ApiRoute, ParametrKey } from '@project/shared-types';
import { UserService } from './user.service';

@Controller(ApiRoute.User)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(ApiRoute.Register)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post(ApiRoute.Login)
  public async login(@Body() loginUserDto: LoginUserDto) {        
    return this.userService.loginUser(loginUserDto);
  }

  @UseGuards(AccessTokenGuard)
  @Post(ApiRoute.Cart)
  public async addProductToCart(@GetUser(ParametrKey.Id) userId: string, @Body() productId: {productId: string}) {     
    return this.userService.addProductToCart(userId, productId.productId);
  }

  @UseGuards(AccessTokenGuard)
  @Get(ApiRoute.Me)
  getMe(@GetUser(ParametrKey.Id) userId: string) {
    return this.userService.getMe(userId);
  }


}
