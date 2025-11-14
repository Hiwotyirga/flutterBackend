import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from './order.entity';
import { Repository } from 'typeorm';
import { OrderItemDto } from './dtos/order.dtos';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderItem)

        private readonly orderRepo :Repository<OrderItem>
    ){}

    async order(dtos:OrderItemDto):Promise<OrderItem>{
        const order= await this.orderRepo.create(dtos)

        return await this.orderRepo.save(order)
    }

    async readOrder(id:string){
        
        const order= await this.orderRepo.findOne({where:{id:id}})

        return order
    }

    async readMany():Promise<OrderItem[]>{
        const order= await this.orderRepo.find()

        return order
    }

    async update(id: string, dtos: Partial<OrderItemDto>) {
      const existingOrder = await this.orderRepo.findOne({ where: { id } });

       if (!existingOrder) {
            throw new NotFoundException('There is no order with this id');
        }

        await this.orderRepo.update(id, dtos);

        const updatedOrder = await this.orderRepo.findOne({ where: { id } });

        return updatedOrder;
}

    async deleteOrder(id:string){
        const order= await this.orderRepo.findOne({where:{id}})
        if(!order){
            throw new NotFoundException("There is  order  with this Id")
        }
        
        await this.orderRepo.delete(order)

        return{
            message:"success"
        }
    }

}
