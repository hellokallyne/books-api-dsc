import { User } from '../auth/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column('text', { array: true })
  genres: string[];

  @Column({type: 'bigint'})
  isbn: bigint;

  @Column()
  publishing_house: string;

  @Column({ nullable: true, default: '' })
  status: string;

  @ManyToOne((type) => User, (user) => user.books, { eager: false })
  user: User;

}
