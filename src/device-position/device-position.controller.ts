import { Body, Controller, Get, Post } from '@nestjs/common';
import { DevicePosition } from 'src/core/entity/device-position.entity';
import { DevicePositionService } from './device-position.service';

@Controller('device-position')
export class DevicePositionController {

    constructor(
        private devicePositionService: DevicePositionService,
    ){}

    
    @Post()
    save(@Body() devicePosition: DevicePosition):Promise <DevicePosition>{
        return this.devicePositionService.save(devicePosition);
    }

    @Get()
    findAll():Promise<DevicePosition[]>{
        return this.devicePositionService.findAll();
    }
}
