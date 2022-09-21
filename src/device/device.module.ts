import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { DeviceSchema } from '../core/schemas/device.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicePositionSchema } from '../core/schemas/device-position.schema';
import { UserSchema } from '../core/schemas/user.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DeviceSchema, DevicePositionSchema, UserSchema
    ]) 
  ],
  providers: [DeviceService],
  controllers: [DeviceController],
  exports: [TypeOrmModule]
})
export class DeviceModule {}
