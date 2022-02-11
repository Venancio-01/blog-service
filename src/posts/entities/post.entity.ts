/*
 * @Author: liqingshan
 * @Date: 2022-02-11 13:38:12
 * @LastEditTime: 2022-02-11 14:49:30
 * @LastEditors: liqingshan
 * @FilePath: \blog-service\src\posts\entities\post.entity.ts
 * @Description:
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  @Column({ length: 50 })
  title: string;

  @Column({ length: 20 })
  author: string;

  @Column('text')
  content: string;

  @Column({ default: '' })
  cover_url: string;

  @Column({ type: 'tinyint', default: 0 })
  type: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}
