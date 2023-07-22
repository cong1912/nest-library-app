import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Borrow } from '@Borrow/entities/borrow.entity';
import { Reservation } from '@Reservation/entities/reservation.entity';
import { Transaction } from '@Transaction/entities/transaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  member_name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  role: string;

  @Column()
  address: string;

  @Column()
  username: string; // Tên người dùng

  @Column()
  password: string; // Mật khẩu

  @OneToMany(() => Borrow, (borrow) => borrow.user)
  borrows: Borrow[];

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservations: Reservation[];

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];
}
