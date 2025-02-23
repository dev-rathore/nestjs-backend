import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';
import { RolesGuard } from '../roles/roles.guard';
import { UserRole } from './user.entity';
import { Roles } from '../roles/roles.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() authDto: AuthDto) {
    return this.authService.register(authDto.username, authDto.password);
  }

  @Post('login')
  async login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto.username, authDto.password);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Request() req) {
    return this.authService.getProfile(req.user.userId);
  }

  // This endpoint is only accessible by users with the role of 'admin'
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get('admin')
  async adminEndpoint(@Request() req) {
    return { message: 'Welcome Admin', user: req.user };
  }
}
