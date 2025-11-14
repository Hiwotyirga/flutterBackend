import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './order.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      OrderItem
    ])
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
