import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { UpdateBookDto } from './dto/update-book.dto';
import { HttpResponse } from 'src/app.service';
import { bookModel } from './dto/create-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('book')
  async addBook(
    @Param('libraryId') librayId: string,
    body: bookModel,
  ): Promise<HttpResponse> {
    return this.bookService.addBook(librayId, body);
  }

  @Put('book/:id')
  async updateBook(
    @Body() body: bookModel,
    @Param('id') id: string,
  ): Promise<HttpResponse> {
    return this.bookService.updateBook(id, body);
  }

  @Delete('book/:id')
  async DeleteAbook(@Param('id') id: string): Promise<HttpResponse> {
    return this.bookService.deleteBook(id);
  }

  @Get('books')
  async listAllBooks(): Promise<HttpResponse> {
    return this.bookService.allBooks();
  }

  @Get('book/:id')
  async aBook(@Param('id') id: string): Promise<HttpResponse> {
    return this.bookService.findAbook(id);
  }
}
