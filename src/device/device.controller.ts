import { Controller, Get, Param } from '@nestjs/common';
import { Device } from 'src/core/entities/device-location.entity';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {

    constructor(
        private deviceService: DeviceService,
    ){ }
    
    
    @Get()
    findById(@Param('id') id: string):Promise<Device>{
        return this.deviceService.findById(id);
    }
}


