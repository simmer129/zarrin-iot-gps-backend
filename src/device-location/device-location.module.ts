import { Module } from '@nestjs/common';
import { DeviceLocationService } from './device-location.service';
import { DeviceLocationController } from './device-location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceLocationSchema } from '../core/schemas/device-location.schema';
import { UserSchema } from 'src/core/schemas/user.schema';
import { DevicePositionSchema } from '../core/schemas/device-position.schema';

@Module({
  imports: [TypeOrmModule.forFeature([
    DeviceLocationSchema, UserSchema, DevicePositionSchema
  ])],
  providers: [DeviceLocationService],
  controllers: [DeviceLocationController]
})
export class DeviceLocationModule {}
