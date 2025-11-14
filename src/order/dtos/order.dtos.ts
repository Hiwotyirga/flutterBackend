import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class OrderItemDto {
  @IsUUID()
  productId: string;

  @IsNumber()
  size: number;

  @IsString()
  color: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

   @IsNotEmpty()
   @IsString()
  ItemName: string;
}
