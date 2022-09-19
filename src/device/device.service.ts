import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from 'src/core/entities/device-location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceService {
    constructor(
        @InjectRepository(Device)
        private deviceRepository: Repository<Device>,
    ){}


    findById(id?: string): Promise<Device> {
        return this.deviceRepository.findOne({where:{id}});
    }
}