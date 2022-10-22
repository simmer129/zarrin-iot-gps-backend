import { EntitySchema } from 'typeorm';
import { DeviceLog } from '../entity/device-log.entity';

export const DeviceLogSchema = new EntitySchema<DeviceLog>({
  name: 'DeviceLog',
  target: DeviceLog,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    lat: {
      type: 'decimal',
      nullable: true,
    },
    lon: {
      type: 'decimal',
      nullable: true,
    },
    signal: {
      type: 'int',
      nullable: true,
    },
    battery: {
      type: 'int',
      nullable: true,
    },
    speed: {
      type: 'int',
      nullable: true,
    },
    deviceTime: {
      type: Date,
      nullable: true,
    },
    createAt: {
      type: Date,
      nullable: true,
    },
  },
  relations: {
    device: {
      type: 'many-to-one',
      target: 'Device',
      nullable: true,
    },
  },
});
