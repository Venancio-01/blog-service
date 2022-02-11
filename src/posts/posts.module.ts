/*
 * @Author: liqingshan
 * @Date: 2022-02-11 13:38:12
 * @LastEditTime: 2022-02-11 14:24:54
 * @LastEditors: liqingshan
 * @FilePath: \blog-service\src\posts\posts.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from './entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
