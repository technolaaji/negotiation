import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './auth-user.interface';
import { UserDto } from './dto/auth-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JWT } from './jwt.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly usermodel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(userData: UserDto) {
    let { password } = userData;
    const { username } = userData;
    const found = await this.usermodel.findOne({ username });
    if (!found) {
      password = await bcrypt.hash(password, 10);
      await this.usermodel.create({ username, password });
      return { message: 'user is created' };
    } else {
      throw new ConflictException();
    }
  }
  async signIn(userData: UserDto) {
    const { username, password } = userData;
    const found = await this.usermodel.findOne({ username });
    if (found) {
      const passwordMatch = await bcrypt.compare(password, found.password);
      if (passwordMatch) {
        const payload = { username };
        const token = await this.jwtService.sign(payload);
        return { token };
      } else {
        throw new UnauthorizedException();
      }
    } else {
      throw new BadRequestException();
    }
  }

  async getUsers(user: JWT) {
    const { username } = user;
    const users = await this.usermodel.find();
    let payload = [];
    users.map(item => {
      if (item.username !== username) {
        payload.push(item.username);
      }
    });
    return payload;
  }
}
