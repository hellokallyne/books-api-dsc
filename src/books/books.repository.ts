import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import { Book } from './book.entity';

@EntityRepository(Book)
export class BooksRepository extends Repository<Book> {
  getAllBooks() {
    return this.createQueryBuilder('book').getMany();
  }

  getBookById(id) {
    return this.findOne(id);
  }

  createBook(createBookDto: CreateBookDto) {
    const { title, author, genres, isbn, publishing_house } = createBookDto;
    let book = this.create({
      title, author, genres, isbn, publishing_house
    });

    return this.save(book);
  }

  async updateBook(id, updateBookDto: UpdateBookDto) {
    const { title, author, genres, isbn, publishing_house } = updateBookDto;

    const book = await this.getBookById(id);

    if (!book) {
      throw new NotFoundException();
    }

    book.title = title;
    book.author = author;
    book.genres = genres;
    book.isbn = isbn;
    book.publishing_house = publishing_house;

    return this.save(book);
  }

  deleteBook(id) {
    return this.delete(id);
  }

}
