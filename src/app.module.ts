import { Module } from '@nestjs/common';

// controllers
import { AppController } from './app.controller';

// services
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
