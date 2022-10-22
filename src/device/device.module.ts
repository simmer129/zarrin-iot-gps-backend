import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { DeviceSchema } from '../core/schemas/device.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountSchema } from 'src/core/schemas/account.schema';
import { DeviceLogSchema } from '../core/schemas/deviceLog.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([DeviceSchema, AccountSchema, DeviceLogSchema]),
  ],
  providers: [DeviceService],
  controllers: [DeviceController],
  exports: [TypeOrmModule],
})
export class DeviceModule {}
