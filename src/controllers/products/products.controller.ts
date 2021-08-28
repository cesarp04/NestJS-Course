import { Controller, Get, Param, Query, Post, Body, Put } from '@nestjs/common';
import { ProductsService } from 'src/service/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  get_products(@Query('limit') limit = 100, @Query('offset') offset = 2) {
    // return `products limit: ${limit} and offset: ${offset}`;
    return this.productService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    // return `Product with id:${id}`;
    return this.productService.findOne(+id);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'Product created',
    //   payload,
    // };
    return this.productService.create(payload);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() payload: any) {
    return this.productService.update(id, payload);
  }
}
