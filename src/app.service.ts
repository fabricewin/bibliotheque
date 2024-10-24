import { Injectable, Delete } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from './db/prisma.service';
import { UserModel } from './dto/create-user.dto';

export interface HttpResponse {
  data?: any;
  message: string;
  statusCode: number;
}
@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  async addUser(user: UserModel): Promise<HttpResponse> {
    const u = await this.prismaService.user.create({
      data: user,
    });
    return {
      data: u,
      message: 'User created successfully',
      statusCode: 201,
    };
  }

  async UpdateUser(
    id: string,
    updateUser: Partial<UserModel>,
  ): Promise<HttpResponse> {
    const u = await this.prismaService.user.update({
      where: { id },
      data: updateUser,
    });
    return {
      data: u,
      message: 'User updated successfully',
      statusCode: 201,
    };
  }

  async deleteUser(id: string): Promise<HttpResponse> {
    await this.prismaService.user.delete({
      where: { id },
    });
    return {
      message: 'User deleted successfully',
      statusCode: 201,
    };
  }

  async allusers(): Promise<HttpResponse> {
    const users = await this.prismaService.user.findMany();
    return {
      data: users,
      message: 'Here is the list of all users',
      statusCode: 201,
    };
  }

  async aUser(id: string): Promise<HttpResponse> {
    const oneUser = await this.prismaService.user.findUnique({
      where: { id: id },
    });
    return {
      data: oneUser,
      message: 'This is the user',
      statusCode: 201,
    };
  }
}
