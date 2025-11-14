import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeOrmConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,          // makes .env available globally
      envFilePath: '.env',     // reads from .env
    }),
    TypeOrmModule.forRootAsync({

      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
  ],
})

export class DatabaseModule {}
