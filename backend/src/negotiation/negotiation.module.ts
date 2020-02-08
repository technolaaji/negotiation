import { Module } from '@nestjs/common';
import { NegotiationController } from './negotiation.controller';
import { NegotiationService } from './negotiation.service';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { negotiationSchema } from './negotiation.schema';

@Module({
  controllers: [NegotiationController],
  providers: [NegotiationService],
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: 'negotiation', schema: negotiationSchema },
    ]),
  ],
})
export class NegotiationModule {}
