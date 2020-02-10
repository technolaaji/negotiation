// this service is responsible for all of the database-controller logic

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
    @InjectModel('User') private readonly usermodel: Model<User>, // the mongoose model
    private jwtService: JwtService,
  ) {}

  async signUp(userData: UserDto) {
    let { password } = userData;
    const { username } = userData;
    const found = await this.usermodel.findOne({ username });
    if (!found) {
      password = await bcrypt.hash(password, 10); // hash passwords up to 10 rounds
      await this.usermodel.create({ username, password }); // creates a user
      return { message: 'user is created' };
    } else {
      throw new ConflictException(); // if a user already exists, then a conflict exception will occur
    }
  }
  async signIn(userData: UserDto) {
    const { username, password } = userData;
    const found = await this.usermodel.findOne({ username }); // fetches a user with an identical username
    if (found) {
      const passwordMatch = await bcrypt.compare(password, found.password); // compares the raw password with the hashed one
      if (passwordMatch) {
        // if the password does match
        const payload = { username }; // what will be send inside of the JWT token, the username only
        const token = await this.jwtService.sign(payload); // creates a JWT Token if username and password matches
        return { token };
      } else {
        throw new UnauthorizedException(); // if password doesn't match but correct username
      }
    } else {
      throw new BadRequestException(); // if username is not found at all
    }
  }

  async getUsers(user: JWT) {
    const { username } = user;
    const users = await this.usermodel.find(); // grabs all users
    let payload = [];
    users.map(item => {
      // checks that this name is not identical to the current username since you cannot negotiate yourself
      if (item.username !== username) {
        payload.push(item.username); // pushes the name to an array to be send later on
      }
    });
    return payload;
  }
}
