import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceLog } from 'src/core/entity/device-log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceLogService {
  constructor(
    @InjectRepository(DeviceLog)
    private deviceLogRepository: Repository<DeviceLog>,
  ) {}

  async save(deviceLog: DeviceLog): Promise<DeviceLog> {
    return await this.deviceLogRepository.save(deviceLog);
  }

  async findByDeviceId(id: string): Promise<DeviceLog[]> {
    const device = {
      id: id,
    };
    return await this.deviceLogRepository.find({
      where: { device },
      order: { createAt: 'DESC' },
    });
  }

  async findOneByDeviceId(id: string): Promise<DeviceLog> {
    const device = {
      id: id,
    };
    return await this.deviceLogRepository.findOne({
      where: { device },
      order: { createAt: 'DESC' },
    });
  }
}
