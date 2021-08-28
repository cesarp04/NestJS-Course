import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  get_products(@Query('limit') limit = 100, @Query('offset') offset = 2) {
    return `products limit: ${limit} and offset: ${offset}`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `Product with id:${id}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Product created',
      payload,
    };
  }
}
