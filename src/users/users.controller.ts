import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/models/user.entity';
import { UserDTO } from './user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  @HttpCode(200) // Use 200 for consistency
  async create(@Body() userDto: UserDTO): Promise<User> {
    const newUser = await this.usersService.create(userDto);
    return newUser;
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() userDto: UserDTO,
  ): Promise<any> {
    await this.usersService.update(id, userDto);
    return { message: `Updated user ${id} successfully` };
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
    const user = await this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException('User does not exist!');
    }

    await this.usersService.delete(id);
    return { message: `Deleted user ${id} successfully` };
  }
}
