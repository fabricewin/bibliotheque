import { ApiProperty } from '@nestjs/swagger';

export class UserModel {
  @ApiProperty()
  fullname: string;

  @ApiProperty()
  email: string;
}
