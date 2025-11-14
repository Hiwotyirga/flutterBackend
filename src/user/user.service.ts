import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buyer } from './user.entity';
import { CreateBuyerDtos } from './dtos/userDtos';

@Injectable()
export class UserService {
     constructor(
    @InjectRepository(Buyer)
    private readonly buyerrepo: Repository<Buyer>,
     ){};

     async signup(dtos:CreateBuyerDtos):Promise<Buyer>{
        const buyer = await this.buyerrepo.create(dtos)

        return await this.buyerrepo.save(buyer)
     }

     async readMany():Promise<Buyer[]>{
         return await this.buyerrepo.find()
     }

     async readUser(id:string){
        return await this.buyerrepo.findOne({where:{id}})
     }

     async update(id:string, dtos: Partial<CreateBuyerDtos>){
        const user = await this.buyerrepo.findOne({where:{id}})

        if(!user){
            throw new NotFoundException("there  is no user in this Id")
        }
        await this.buyerrepo.update(id,dtos)
        
        return await this.buyerrepo.findOne({where:{id}})
     }

     async deleteUser(id:string){
        const user = await this.buyerrepo.findOne({where:{id}})
         if(!user){
            throw new NotFoundException("there is no user with  this  id")

         }
         await this.buyerrepo.delete(user)
         return{
            message:"successfully"
         }
     }
}
