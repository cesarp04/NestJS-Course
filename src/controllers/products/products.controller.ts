import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from 'src/service/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  get_products(@Query('limit') limit = 100, @Query('offset') offset = 2) {
    // return `products limit: ${limit} and offset: ${offset}`;
    return this.productsService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    // return `Product with id:${id}`;
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'Product created',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() payload: any) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
