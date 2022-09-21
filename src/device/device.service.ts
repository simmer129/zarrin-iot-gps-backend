import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from 'src/core/entity/device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceService {
 constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
 ){ }   

 insertGroup (device: Device[]): Promise<Device[]>{
    return this.deviceRepository.save(device);
 }

 save(device: Device): Promise<Device>{
    return this.deviceRepository.save(device);
 }

 findById(id: string): Promise<Device>{
    return this.deviceRepository.findOne({where:{id}});
 }

 findAll(): Promise<Device[]>{
    return this.deviceRepository.find();
 }
}
