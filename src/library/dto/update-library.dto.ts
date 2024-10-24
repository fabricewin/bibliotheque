import { PartialType } from '@nestjs/mapped-types';
import { libraryModel } from './create-library.dto';

export class UpdateLibraryDto extends PartialType(libraryModel) {}
