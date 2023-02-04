import { User } from '@project/shared-types';
import { IsEmail, IsString, Length } from 'class-validator';
import { UserValidation } from '../validation/user.validation';

export class CreateUserDto implements User {
  @IsString()
  @Length(UserValidation.NameLength.min, UserValidation.NameLength.max)
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @Length(UserValidation.PasswordLength.min, UserValidation.PasswordLength.max)
  password!: string;
}
