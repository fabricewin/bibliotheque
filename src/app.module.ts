import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './library/library.module';
import { BookModule } from './book/book.module';
import { PrismaModule } from './db/prisma.module';

@Module({
  imports: [LibraryModule, BookModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
