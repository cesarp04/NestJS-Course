import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/new')
  newEndpoints() {
    return 'I am new endpoint';
  }

  @Get('/products/:id')
  getProducts(@Param('id') id: string) {
    return `Product with id:${id}`;
  }
}
