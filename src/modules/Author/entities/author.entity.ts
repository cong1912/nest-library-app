import { Book } from '@Book/entities/book.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author_name: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
