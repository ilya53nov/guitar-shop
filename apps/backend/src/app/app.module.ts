import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { jwtAccessOptions } from '@project/core';
import { getServeStaticConfig, staticOptions } from '../config/static.config';
import { BACKEND_ENV_FILE_PATH } from './app.constant';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: BACKEND_ENV_FILE_PATH,
      load: [staticOptions, jwtAccessOptions],
      //validate: validateEnvironments,
    }),
    ServeStaticModule.forRootAsync({
      useFactory: getServeStaticConfig,
      inject: [ConfigService],
    }),
    ProductModule,
    CommentModule,
    UserModule,
    
  ],
  controllers: [AppController ],
  providers: [AppService, ProductService],
})
export class AppModule {}
