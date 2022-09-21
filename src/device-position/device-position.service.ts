import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DevicePosition } from 'src/core/entity/device-position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DevicePositionService {

    constructor(
        @InjectRepository(DevicePosition)
        private deviceRepository: Repository<DevicePosition>,
    ){ }

    save(devicePosition: DevicePosition): Promise<DevicePosition>{
        return this.deviceRepository.save(devicePosition);
    }

    findAll():Promise<DevicePosition[]>{
        return this.deviceRepository.find();
    }
}
