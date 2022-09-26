import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Device } from 'src/core/entity/device.entity';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
    constructor(
        private deviceService: DeviceService,
    ){ }
    
    @Post('group')
    insertGroup(@Body() device:Device[]): Promise<Device[]>{
        return this.deviceService.insertGroup(device);
    }

    @Post()
    save(@Body() device: Device): Promise<Device>{
        return this.deviceService.save(device);
        console.table(device);
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Device>{
        return this.deviceService.findById(id);
    }

    @Get()
    findAll(): Promise<Device[]>{
        return this.deviceService.findAll();
    }
}
