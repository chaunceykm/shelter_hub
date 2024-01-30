import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/models/user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      console.error('Error fetching users:', error.message);
      throw new Error('Unable to fetch users');
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      return await this.userRepository.findOne({ where: { id } });
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error.message);
      throw new Error(`Unable to fetch user with ID ${id}`);
    }
  }

  async create(createUserDTO: UserDTO): Promise<User> {
    try {
      const newUser = this.userRepository.create(createUserDTO);
      return await this.userRepository.save(newUser);
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw new Error('Unable to create user');
    }
  }

  async update(id: string, updateUserDTO: UserDTO): Promise<User> {
    try {
      const existingUser = await this.userRepository.findOne({ where: { id } });

      if (!existingUser) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      this.userRepository.merge(existingUser, updateUserDTO);

      return await this.userRepository.save(existingUser);
    } catch (error) {
      console.error(`Error updating user with ID ${id}:`, error.message);
      throw new Error(`Unable to update user with ID ${id}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.userRepository.delete(id);
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error.message);
      throw new Error(`Unable to delete user with ID ${id}`);
    }
  }
}
