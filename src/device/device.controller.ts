import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { Device } from 'src/core/entity/device.entity';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Post()
  insertGroup(@Body() device: any): Promise<any> {
    return this.deviceService.insertGroup(device);
  }

  @Post('/group')
  save(@Body() device: Device[]): Promise<Device[]> {
    return this.deviceService.save(device);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Device> {
    return this.deviceService.findById(id);
  }

  @Get()
  findAll(): Promise<Device[]> {
    return this.deviceService.findAll();
  }

  @Get('/serial/:serial')
  findBySerial(@Param('serial') serial: number): Promise<Device> {
    if (serial !== undefined) {
      return this.deviceService.findBySerial(serial);
    } else {
      throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST);
    }
  }
}
