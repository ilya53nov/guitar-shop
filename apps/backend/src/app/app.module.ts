import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [ProductModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, ProductService],
})
export class AppModule {}
