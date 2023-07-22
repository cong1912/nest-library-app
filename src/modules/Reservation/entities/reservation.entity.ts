import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Book } from '@Book/entities/book.entity';
import { User } from '@/modules/User/entities/user.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book, (book) => book.reservations)
  book: Book;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @Column()
  reservation_date: Date;

  @Column()
  status: string;
}
