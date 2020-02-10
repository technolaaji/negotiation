// this controller is responsible for the endpoints responsible for the authentication route

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
@UsePipes(ValidationPipe) // used on the controller to check each value passed on
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
  // this decorator is used for security issues where only authenticated users can retreive other usernaames to negotiate with
  @UseGuards(AuthGuard('jwt'))
  async getUsers(@getUser() user: JWT) {
    return this.authService.getUsers(user);
  }
}
