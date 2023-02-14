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
import { Product } from '@prisma/client';
import { AccessTokenGuard, CreateUserDto, GetUser, LoginUserDto } from '@project/core';
import { ApiRoute, ParametrKey } from '@project/shared-types';
import { UserService } from './user.service';

@Controller('user')
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
  @Post('cart')
  public async addProductToCart(@GetUser(ParametrKey.Id) userId: string, @Body() product: Product) {        
    return this.userService.addProductToCart(userId, product);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(AccessTokenGuard)
  @Get('me')
  getMe(@GetUser(ParametrKey.Id) userId: string) {
    return this.userService.getMe(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
