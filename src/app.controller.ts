/*
 * @Author: liqingshan
 * @Date: 2022-01-14 16:45:35
 * @LastEditTime: 2022-02-11 14:35:01
 * @LastEditors: liqingshan
 * @FilePath: \blog-service\src\app.controller.ts
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('公共接口')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
