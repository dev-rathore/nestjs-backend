import { IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;
}
