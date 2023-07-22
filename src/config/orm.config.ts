import { Author } from '@/modules/Author/entities/author.entity';
import { Book } from '@/modules/Book/entities/book.entity';
import { Borrow } from '@/modules/Borrow/entities/borrow.entity';
import { Category } from '@/modules/Category/entities/category.entity';
import { LibraryBranch } from '@/modules/LibraryBranch/entities/library-branch.entity';
import { Reservation } from '@/modules/Reservation/entities/reservation.entity';
import { Transaction } from '@/modules/Transaction/entities/transaction.entity';
import { User } from '@/modules/User/entities/user.entity';
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
      Author,
      Book,
      Borrow,
      Category,
      LibraryBranch,
      User,
      Reservation,
      Transaction,
    ],
    synchronize: true,
  }),
);
