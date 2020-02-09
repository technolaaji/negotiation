import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/auth-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { getUser } from './getUserDecorator';
import { JWT } from './jwt.interface';

@Controller('auth')
@UsePipes(ValidationPipe)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signup(@Body() userData: UserDto) {
    return await this.authService.signUp(userData);
  }
  @Post('/signin')
  async signin(@Body() userData: UserDto) {
    return await this.authService.signIn(userData);
  }

  @Get('/users')
  @UseGuards(AuthGuard('jwt'))
  async getUsers(@getUser() user: JWT) {
    return this.authService.getUsers(user);
  }
}
