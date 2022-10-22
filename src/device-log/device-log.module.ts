import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceLogSchema } from 'src/core/schemas/deviceLog.schema';
import { DeviceLogController } from './device-log.controller';
import { DeviceLogService } from './device-log.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceLogSchema])],
  providers: [DeviceLogService],
  controllers: [DeviceLogController],
  exports: [TypeOrmModule],
})
export class DeviceLogModule {}
