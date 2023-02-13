import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { getJwtOptions, JwtAccessStrategy, JwtConfig } from '@project/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
    PassportModule,
    JwtModule.registerAsync({
      useFactory: getJwtOptions,
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, JwtAccessStrategy, JwtConfig],
})
export class UserModule {}
