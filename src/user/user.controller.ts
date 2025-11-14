import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateBuyerDtos } from './dtos/userDtos';

@Controller('user')
export class UserController {
      constructor(private readonly userService: UserService) {}

      @Post()
      async cretae(@Body() dtos:CreateBuyerDtos){
        return await this.userService.signup(dtos)
      }

      @Get()
      async readMany(){
        return await this.userService.readMany()
      }
      @Get('/:id')
      async readUser(@Param("id") id:string){
        return await this.userService.readUser(id)
      }
    
      @Patch('/:id')
      async update( @Param('id') id:string, dtos:Partial<CreateBuyerDtos>){
        return await this.userService.update(id,dtos)
      }

      @Delete('/:id')
      async deleteUser( @Param('id') id:string){
        return await this.userService.deleteUser(id)
      }
}
