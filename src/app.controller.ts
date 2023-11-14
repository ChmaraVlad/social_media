import { Controller, Get } from '@nestjs/common';

// seervices
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
