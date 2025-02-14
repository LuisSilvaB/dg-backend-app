import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('hello')
  getHello() {
    return this.authService.login();
  }
  @Post('login')
  login() {
    return 'login';
  }
  @Post('register')
  register() {
    return 'register';
  }
}
