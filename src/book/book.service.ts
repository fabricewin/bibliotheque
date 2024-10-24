import { PrismaService } from './../db/prisma.service';
import { Injectable } from '@nestjs/common';
import { bookModel } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { HttpResponse } from 'src/app.service';

@Injectable()
export class BookService {
  constructor(private PrismaService: PrismaService) {}

  async addBook(libraryId: string, book: bookModel): Promise<HttpResponse> {
    const newBook = await this.PrismaService.book.create({
      data: {
        ...book,
        library: { connect: { id: libraryId } },
      },
    });
    return {
      data: newBook,
      message: 'Book added successfully',
      statusCode: 201,
    };
  }

  async updateBook(
    id: string,
    updateBook: Partial<bookModel>,
  ): Promise<HttpResponse> {
    const bk = await this.PrismaService.book.update({
      where: { id },
      data: updateBook,
    });
    return {
      data: bk,
      message: 'Book successfully updated',
      statusCode: 201,
    };
  }

  async deleteBook(id: string): Promise<HttpResponse> {
    await this.PrismaService.book.delete({
      where: { id },
      include: { library: true },
    });
    return {
      message: 'Book sucessfully removed',
      statusCode: 201,
    };
  }

  async findAbook(id: string): Promise<HttpResponse> {
    const aBook = await this.PrismaService.book.findUnique({
      where: { id },
    });
    return {
      data: aBook,
      message: 'That is book you are looking for',
      statusCode: 201,
    };
  }

  async allBooks(): Promise<HttpResponse> {
    const books = await this.PrismaService.book.findMany();
    return {
      data: books,
      message: 'Here are all our books',
      statusCode: 201,
    };
  }
}
