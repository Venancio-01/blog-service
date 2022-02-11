/*
 * @Author: liqingshan
 * @Date: 2022-02-11 14:27:47
 * @LastEditTime: 2022-02-11 14:28:08
 * @LastEditors: liqingshan
 * @FilePath: \blog-service\src\core\interceptor\transform.interceptor.ts
 * @Description:
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          code: 0,
          msg: '请求成功',
        };
      }),
    );
  }
}
