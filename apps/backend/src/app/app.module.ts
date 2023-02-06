import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { UserModule } from './user/user.module';


@Module({
  imports: [ProductModule, CommentModule, UserModule],
  controllers: [AppController ],
  providers: [AppService, ProductService],
})
export class AppModule {}
