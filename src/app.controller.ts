import { Controller, Get, Param, Query } from '@nestjs/common';
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
  getProduct(@Param('id') id: string) {
    return `Product with id:${id}`;
  }

  @Get('/products')
  get_products(@Query('limit') limit: number, @Query('offset') offset: number) {
    return `products ${limit}and ${offset}`;
  }
}
