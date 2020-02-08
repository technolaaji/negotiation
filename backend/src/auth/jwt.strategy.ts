import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JWT } from './jwt.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './auth-user.interface';
import { Model } from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: String(process.env.JWT),
    });
  }
  async validate(payload: JWT) {
    const { username } = payload;
    const found = await this.userModel.findOne({ username });
    if (!found) {
      throw new UnauthorizedException();
    }
    return { username };
  }
}
