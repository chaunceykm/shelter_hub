import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { UserRole } from 'src/models/user.entity';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEnum(UserRole)
  role: UserRole;

  constructor(partial: Partial<UserDTO>) {
    Object.assign(this, partial);
  }
}
