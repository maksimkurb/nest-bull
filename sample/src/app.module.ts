import { Module } from '@nestjs/common';
import { NumberService } from './number.service';
import { BullModule } from 'nest-bull';
import { AnotherModule } from './another.module';
import { MyQueue } from './my-queue';

@Module({
  imports: [
    BullModule.forRoot({
      name: 'test',
    }),
    AnotherModule,
  ],
  controllers: [],
  providers: [MyQueue, NumberService],
  exports: [MyQueue, NumberService],
})
export class AppModule {}
