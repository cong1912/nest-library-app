import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LibraryBranch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  branch_name: string;

  @Column()
  location: string;
}
