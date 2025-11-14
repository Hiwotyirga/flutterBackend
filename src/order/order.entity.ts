import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  ItemName: string;

  @Column({ type: 'varchar', length: 100 })
  color: string;

  @Column({ type: 'int' })
  quantity: number;

  
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}

