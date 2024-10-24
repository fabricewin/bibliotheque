import { Injectable } from '@nestjs/common';
import { libraryModel } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { PrismaService } from '../db/prisma.service';
import { HttpResponse } from 'src/app.service';

@Injectable()
export class LibraryService {
  constructor(private PrismaService: PrismaService) {}

  async addLibrary(
    userId: string,
    library: libraryModel,
  ): Promise<HttpResponse> {
    const newlib = await this.PrismaService.library.create({
      data: {
        name: library.name,
        owner: { connect: { id: userId } },
      },
      include: { owner: true },
    });
    return {
      data: newlib,
      message: 'Library created successfully',
      statusCode: 201,
    };
  }
}
