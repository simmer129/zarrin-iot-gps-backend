import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { DeviceLog } from 'src/core/entity/device-log.entity';
import { DeviceLogService } from './device-log.service';

@Controller('device-log')
export class DeviceLogController {
  constructor(private deviceLogService: DeviceLogService) {}

  @Get(':id')
  findBySerial(@Param('id') id: string): Promise<DeviceLog[]> {
    if (id !== undefined) {
      return this.deviceLogService.findByDeviceId(id);
    } else {
      throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST);
    }
  }

  @Get('/id/:id')
  findOneBySerial(@Param('id') id: string): Promise<DeviceLog> {
    if (id !== undefined) {
      return this.deviceLogService.findOneByDeviceId(id);
    } else {
      throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST);
    }
  }
}
