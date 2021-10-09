import { ConflictException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import { BooksRepository } from './books.repository';

@Injectable()
export class BooksService {
  constructor(private booksRepository: BooksRepository) { }

  getAllBooks() {
    return this.booksRepository.getAllBooks();
  }

  getAllByUser(user) {
    return this.booksRepository.find({ user });
  }

  getBookById(id) {
    return this.booksRepository.getBookById(id);
  }

  createBook(createBookDto: CreateBookDto) {
    return this.booksRepository.createBook(createBookDto);
  }

  updateBook(id, updateBookDto: UpdateBookDto) {
    return this.booksRepository.updateBook(id, updateBookDto);
  }

  deleteBook(id) {
    return this.booksRepository.deleteBook(id);
  }

  async reserveBook(id, user) {
    const { affected } = await this.booksRepository.update({ id: id, user: null }, { user: user, status: 'Reservado' });

    if (affected == 1) {
      return { success: true }
    } else {
      throw new ConflictException('Esse livro foi reservado por outro usuário.')
    }
  }

  async borrowBook(id, user) {
    const { affected } = await this.booksRepository.update({ id: id, user: user }, { status: 'Emprestado' });

    if (affected == 1) {
      return { success: true }
    } else {
      throw new ConflictException('Você não pode pegar esse livro, ele foi emprestado à outro usuário.')
    }
  }
}
