/*
 * @Author: liqingshan
 * @Date: 2022-02-11 13:38:12
 * @LastEditTime: 2022-02-11 14:44:19
 * @LastEditors: liqingshan
 * @FilePath: \blog-service\src\posts\dto\create-post.dto.ts
 * @Description:
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: '标题' })
  @IsNotEmpty({ message: '文章标题必填' })
  readonly title: string;

  @ApiProperty({ description: '作者' })
  @IsNotEmpty({ message: '缺少作者信息' })
  readonly author: string;

  @ApiProperty({ description: '内容' })
  @IsString()
  readonly content: string;

  @ApiProperty({ description: '封面' })
  readonly cover_url: string;

  @ApiProperty({ description: '类型' })
  @IsNumber()
  readonly type: number;
}
