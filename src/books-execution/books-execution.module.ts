import { Module } from '@nestjs/common';
import { BooksModule } from '../books/books.module';
import { BooksExecutionController } from './books-execution.controller';
import { BooksExecutionService } from './books-execution.service';

@Module({
  imports: [BooksModule],
  controllers: [BooksExecutionController],
  providers: [BooksExecutionService],
})
export class BooksExecutionModule {}
