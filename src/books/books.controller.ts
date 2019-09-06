import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookRequest, BookResponse } from './models';
import * as cuid from 'cuid';
import { runInThisContext } from 'vm';
import { tsBooleanKeyword } from '@babel/types';
@Controller('books')
export class BooksController {
  data = [
    {
      id: cuid(),
      title: 'Book 1',
      author: 'Author 1',
      format: 'hardcover',
    },
    {
      id: cuid(),
      title: 'Book 2',
      author: 'Author 2',
      format: 'paperback',
    },
  ];
  @Get()
  getData() {
    return this.data;
  }

  @Post()
  addShow(@Body() book: BookRequest) {
    const newBook: BookResponse = {
      id: cuid(),
      title: book.title,
      author: book.author,
      format: book.format,
    };
    this.data.push(newBook);
    return newBook;
  }
}
