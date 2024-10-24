import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LibraryService } from './library.service';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { libraryModel } from './dto/create-library.dto';
import { HttpResponse } from 'src/app.service';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  async addLibrary(
    @Param('userId') userId: string,
    @Body() body: libraryModel,
  ): Promise<HttpResponse> {
    return this.libraryService.addLibrary(userId, body);
  }
}
