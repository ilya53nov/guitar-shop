import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';

import { ConfigService } from '@nestjs/config';
import { getMulterConfig } from '../../config/multer.config';

@Module({
  imports: [
    PrismaModule,
    ProductModule,
    MulterModule.registerAsync({
      useFactory: getMulterConfig,
      inject: [ConfigService],
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  exports: [ProductRepository],
})
export class ProductModule {}
