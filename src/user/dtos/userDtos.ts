import {
  IsBoolean,
  IsDecimal,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateBuyerDtos {
  @IsOptional()
  @IsString()
  email?: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  name: string;
}
