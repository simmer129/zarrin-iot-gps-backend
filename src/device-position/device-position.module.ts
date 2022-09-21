import { Module } from '@nestjs/common';
import { DevicePositionService } from './device-position.service';
import { DevicePositionController } from './device-position.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicePositionSchema } from '../core/schemas/device-position.schema';
import { DeviceSchema } from '../core/schemas/device.schema';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      DevicePositionSchema, DeviceSchema
    ])
  ],
  providers: [DevicePositionService],
  controllers: [DevicePositionController],
  exports: [TypeOrmModule]
})
export class DevicePositionModule {}
