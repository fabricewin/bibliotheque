import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserModel } from './dto/create-user.dto';
import { HttpResponse } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  async addUser(@Body() body: UserModel): Promise<HttpResponse> {
    return this.appService.addUser(body);
  }

  @Put('updateUser/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: UserModel,
  ): Promise<HttpResponse> {
    return this.appService.UpdateUser(id, body);
  }

  @Delete('deleteUser/:id')
  async deleteUser(@Param('id') id: string): Promise<HttpResponse> {
    return this.appService.deleteUser(id);
  }

  @Get('users')
  async allUsers(): Promise<HttpResponse> {
    return this.appService.allusers();
  }

  @Get('user/:id')
  async aUser(id: string): Promise<HttpResponse> {
    return this.appService.aUser(id);
  }
}
