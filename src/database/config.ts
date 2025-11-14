import 'reflect-metadata';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';


dotenv.config();

export const getTypeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const isDevelopment = configService.get<string>('NODE_ENV') === 'development';

  return {
    type: 'postgres', // literal type now recognized
    host: configService.get<string>('DB_HOST'),
    port: Number(configService.get<number>('DB_PORT')),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),

    entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
    migrations: [join(__dirname, '../../migrations/*{.ts,.js}')],

    synchronize: true,
    migrationsRun: false,

    logging: isDevelopment ? ['query', 'error', 'schema'] : ['error'],
    logger: isDevelopment ? 'advanced-console' : 'file',

    poolSize: configService.get<number>('DB_POOL_SIZE', 10),
    maxQueryExecutionTime: 5000,

    ssl: configService.get<boolean>('DB_SSL')
      ? { rejectUnauthorized: false }
      : false,
    cache: {
      type: 'database',
      duration: 30000,
    },
  };
};
