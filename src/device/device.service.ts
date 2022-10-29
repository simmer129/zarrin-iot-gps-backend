import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceLog } from 'src/core/entity/device-log.entity';
import { Device } from 'src/core/entity/device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
    @InjectRepository(DeviceLog)
    private deviceLogRepository: Repository<DeviceLog>,
  ) {}

  async insertGroup(device: any) {
    console.log(device);
    const devices = await this.deviceRepository.findOne({
      where: {
        serial: device.Sn,
      },
    });
    const startTime = new Date();
    startTime.setMinutes(startTime.getMinutes() - 1);
    return device.Location.forEach((element, i) => {
      console.log(element);
      if (element.length !== 0) {
        const gpsData = {
          id: devices.id,
          recordIndex: element.RI,
          recordHandel: i + 1,
        };

        const logDate = new Date(startTime);
        logDate.setSeconds(
          logDate.getSeconds() + (i * 60) / device.Location.length,
        );

        const gpsLog: DeviceLog = <DeviceLog>{
          createAt: logDate,
          device: devices,
          lat: element.LA,
          lon: element.LO,
          signal: device.Si,
          battery: element.BA,
          speed: element.SP,
          deviceTime: element.TI,
        };

        console.log('index in loops', i);
        console.log('looooooogs is : ' + JSON.stringify(gpsLog));
        this.deviceRepository.save(gpsData);
        this.deviceLogRepository.save(gpsLog);
        return gpsData;
      } else {
        console.log('element is empty');
      }
    });
  }

  save(device: Device[]): Promise<Device[]> {
    console.log(device);
    return this.deviceRepository.save(device);
  }

  findById(id: string): Promise<Device> {
    return this.deviceRepository.findOne({
      where: { id },
      order: { recordIndex: 'DESC' },
    });
  }

  findAll(): Promise<Device[]> {
    return this.deviceRepository.find({ order: { recordIndex: 'DESC' } });
  }

  findBySerial(serial: number): Promise<Device> {
    return this.deviceRepository.findOne({
      where: { serial },
      order: { createdAt: 'DESC' },
    });
  }
}
