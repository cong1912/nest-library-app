import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Book } from '@Book/entities/book.entity';
import { User } from '@/modules/User/entities/user.entity';

@Entity()
export class Borrow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book, (book) => book.borrows)
  book: Book;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @Column()
  borrow_date: Date;

  @Column()
  due_date: Date;

  @Column()
  return_date: Date;

  @Column()
  status: string; // Trạng thái mượn sách, ví dụ: 'đang mượn', 'đã trả sách', 'quá hạn trả sách',...
}
