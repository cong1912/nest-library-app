import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Category } from '@Category/entities/category.entity';
import { Author } from '@Author/entities/author.entity';
import { Borrow } from '@Borrow/entities/borrow.entity';
import { Reservation } from '@Reservation/entities/reservation.entity';
import { Transaction } from '@Transaction/entities/transaction.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @Column()
  isbn: string;

  @Column()
  published_year: number;

  @ManyToOne(() => Category, (category) => category.books)
  category: Category;

  @Column()
  total_copies: number;

  @Column()
  available_copies: number;

  @OneToMany(() => Borrow, (borrow) => borrow.book)
  borrows: Borrow[];

  @OneToMany(() => Reservation, (reservation) => reservation.book)
  reservations: Reservation[];

  @OneToMany(() => Transaction, (transaction) => transaction.book)
  transactions: Transaction[];

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number; // Giá tiền của sách

  @Column({ default: 'available' })
  status: string; // Trạng thái sách, ví dụ: 'available' (có sẵn để mượn), 'sold' (đã bán), ...
}
