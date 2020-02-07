import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { NegotiationModule } from './negotiation/negotiation.module';

@Module({
  imports: [AuthModule, NegotiationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
