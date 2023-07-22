import { User } from '@/modules/User/entities/user.entity';
import { Book } from '@Book/entities/book.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book, (book) => book.transactions)
  book: Book;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @Column()
  transaction_date: Date;

  @Column()
  transaction_type: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  total_amount: number; // Thành tiền của giao dịch

  @Column({ nullable: true })
  invoice_number: string; // Số hóa đơn của giao dịch (nếu có)
}
