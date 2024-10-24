import { PartialType } from '@nestjs/mapped-types';
import { bookModel } from './create-book.dto';

export class UpdateBookDto extends PartialType(bookModel) {}
