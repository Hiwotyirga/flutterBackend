import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderItemDto } from './dtos/order.dtos';
import { OrderItem } from './order.entity';

@Controller('order')
export class OrderController {
    constructor(
        private readonly orderService: OrderService
    ){}
    
    @Post()
    async createOrder(
        @Body() dtos:OrderItemDto
    ){
        return await this.orderService.order(dtos)
    }
    
    @Get('/id')
    async readorder(@Param('id') id:string){
        return await this.orderService.readOrder(id)
    }

    @Get()
    async readMany():Promise<OrderItem[]>{
        return await this.orderService.readMany()
    }
    
    @Patch('/:id')
    async update(
        @Param('id') id:string,
        @Body() dtos:Partial<OrderItemDto>
    ){
        return await this.orderService.update(id,dtos)
    }

    @Delete('/:id')
    async deleteOrder(
        @Param("id") id:string
    ){
        return await this.orderService.deleteOrder(id)
    }

}
