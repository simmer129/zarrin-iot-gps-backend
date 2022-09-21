import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../core/schemas/user.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserSchema
    ])
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [TypeOrmModule]
})
export class UserModule {}
