import { Controller, Get, Param } from '@nestjs/common';
import { DeviceLocation } from 'src/core/entity/device-location.entity';
import { DeviceLocationService } from './device-location.service';

@Controller('device-location')
export class DeviceLocationController {
    constructor(private deviceLocationService: DeviceLocationService){ }


    @Get()
    findAll(@Param('id') id:string): Promise<DeviceLocation>{
        return this.deviceLocationService.findAll(id);       
    }

}
