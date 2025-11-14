// src/seller/entities/seller.entity.ts
// import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
// @Unique('unique_seller_email', ['email'])
// @Unique('unique_seller_phone', ['phoneNumber'])
export class Buyer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100,  nullable: true })
  email: string;

  @Column({ length: 20, })
  phoneNumber: string;

  @Column({ length: 255 })
  @Exclude()
  name: string;

  
}
