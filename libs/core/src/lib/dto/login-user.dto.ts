import { IsEmail, IsString, Length } from 'class-validator';
import { UserValidation } from '../validation/user.validation';

export class LoginUserDto {
  @IsEmail()
  email!: string;

  @IsString()
  @Length(UserValidation.PasswordLength.min, UserValidation.PasswordLength.max)
  password!: string;  
}