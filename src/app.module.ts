import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BooksModule } from './books/books.module';
import { BooksExecutionModule } from './books-execution/books-execution.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BooksModule,
    BooksExecutionModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
