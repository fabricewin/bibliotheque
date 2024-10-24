import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { PrismaModule } from 'src/db/prisma.module';

@Module({
  controllers: [LibraryController],
  imports: [PrismaModule],
  providers: [LibraryService],
})
export class LibraryModule {}
