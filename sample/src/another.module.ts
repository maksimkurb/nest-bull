import { Module, forwardRef } from '@nestjs/common';
import { AnotherController } from './another.controller';
import { AppModule } from './app.module';

@Module({
  imports: [forwardRef(() => AppModule)],
  controllers: [AnotherController],
  providers: [],
})
export class AnotherModule {}
