import { Injectable } from '@nestjs/common';
import { User } from '../auth/user.entity';
import { BooksService } from '../books/books.service';

@Injectable()
export class BooksExecutionService {
  constructor(private booksService: BooksService) { }

  async reserveBook(id, user) {
    return this.booksService.reserveBook(id, user);
  }

  async borrowBook(id, user) {
    return this.booksService.borrowBook(id, user);
  }

  getAllByUser(user) {
    return this.booksService.getAllByUser(user);
  }
}
