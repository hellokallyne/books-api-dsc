import { BooksExecutionService } from './books-execution.service';
import { User } from '../auth/user.entity';
import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { BooksRepository } from '../books/books.repository';

@Controller('books-execution')
@UseGuards(AuthGuard('jwt'))
export class BooksExecutionController {
  constructor(private booksExecutionService: BooksExecutionService) { }

  @Post('/books/:id')
  reserveBook(@Param('id') id, @GetUser() user: User) {
    return this.booksExecutionService.reserveBook(id, user);
  }

  @Post('/books/:id/borrow')
  borrowBook(@Param('id') id, @GetUser() user: User) {
    return this.booksExecutionService.borrowBook(id, user);
  }

  @Get('/books/user/')
  getUserExecutions(@GetUser() user: User) {
    return this.booksExecutionService.getAllByUser(user);
  }
}
