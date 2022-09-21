import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,            
    ){ }

    save(user:User): Promise<User>{
        return this.userRepository.save(user);
    }

    findAll(): Promise<User[]>{
        return this.userRepository.find();
    }
}
