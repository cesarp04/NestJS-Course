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
import { ProductsService } from 'src/products/service/products/products.service';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/products/dtos/products.dto';

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
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'Product created',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
