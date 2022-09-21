import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/core/entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
    ){ }

    @Post()
    save(@Body() user: User): Promise<User>{
        return this.userService.save(user);
    }

    @Get()
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }
}
