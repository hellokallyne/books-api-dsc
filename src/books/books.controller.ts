import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import { BooksService } from './books.service';

@Controller('books')
@UseGuards(AuthGuard('jwt'))
export class BooksController {
  constructor(private booksService: BooksService) { }

  @Get()
  getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id) {
    return this.booksService.getBookById(id);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.booksService.createBook(createBookDto);
  }

  @Put(':id')
  updateBook(@Param('id') id, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  deleteBook(@Param('id') id) {
    return this.booksService.deleteBook(id);
  }
}
