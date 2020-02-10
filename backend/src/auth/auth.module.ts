// the module responsible for importing and exporting modules

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userAuthSchema } from './auth.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userAuthSchema }]), // schema for the user type
    JwtModule.register({
      secret: String(process.env.JWT), // generate JWT tokens based on a long shuffled enviroment variable
      signOptions: { expiresIn: '1hr' }, // for security reasons, a token doesn't exceed one hour of creation
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }), // module used for validation and JWT strategy
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule], // strategy is exported to be used in other modules as well
})
export class AuthModule {}
