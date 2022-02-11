/*
 * @Author: liqingshan
 * @Date: 2022-02-11 14:14:49
 * @LastEditTime: 2022-02-11 14:14:51
 * @LastEditors: liqingshan
 * @FilePath: \blog-service\config\env.ts
 * @Description:
 */
import * as fs from 'fs';
import * as path from 'path';
const isProd = process.env.NODE_ENV === 'production';

function parseEnv() {
  const localEnv = path.resolve('.env');
  const prodEnv = path.resolve('.env.prod');

  if (!fs.existsSync(localEnv) && !fs.existsSync(prodEnv)) {
    throw new Error('缺少环境配置文件');
  }

  const filePath = isProd && fs.existsSync(prodEnv) ? prodEnv : localEnv;
  return { path: filePath };
}
export default parseEnv();
