import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Buyer } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports:[
         TypeOrmModule.forFeature([
            Buyer

    ]),

    ],
    exports:[UserService],
    controllers:[
        UserController
    ],
    providers:[
        UserService
    ]
 
})
export class UserModule {}
