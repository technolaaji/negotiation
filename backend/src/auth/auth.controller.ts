import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/auth-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  async signup(@Body() userData: UserDto) {
    return await this.authService.signUp(userData);
  }
  @Post('/signin')
  @UsePipes(ValidationPipe)
  async signin(@Body() userData: UserDto) {
    return await this.authService.signIn(userData);
  }
}
