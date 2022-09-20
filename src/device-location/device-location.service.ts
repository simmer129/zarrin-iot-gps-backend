import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceLocation } from '../core/entity/device-location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceLocationService {
    constructor( 
    @InjectRepository(DeviceLocation)
    private deviceLocationRepository:Repository<DeviceLocation>    
    ){ }

    findAll(id: string):Promise<DeviceLocation>{
        return this.deviceLocationRepository.findOne({where:{id}});
    }
}
