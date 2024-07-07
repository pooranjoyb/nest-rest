import { IsEmail, IsString, IsOptional } from 'class-validator';

// pipes
export class UserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}
