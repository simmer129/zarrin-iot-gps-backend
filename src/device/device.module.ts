import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceSchema } from '../core/schemas/device.schema';
import { GpsData } from 'src/core/microservices';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      DeviceSchema
    ]),
  ],
  controllers: [DeviceController],
  providers: [DeviceService]
})
export class DeviceModule {}
