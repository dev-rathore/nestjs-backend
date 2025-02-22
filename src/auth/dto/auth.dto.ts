import { IsEnum, IsString, MinLength, ValidateIf } from 'class-validator';
import { UserRole } from '../user.entity';

export class AuthDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @ValidateIf((obj) => obj.role !== undefined)
  @IsEnum(UserRole, { message: 'Role must be either user or admin' })
  role?: UserRole;
}
