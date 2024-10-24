import { ApiProperty } from '@nestjs/swagger';

export class bookModel {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  nameAuthor: string;
}
