import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// pipes
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
