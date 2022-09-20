import { DevicePosition } from '../entity/device-position.entity';
import { Double, EntitySchema } from 'typeorm';
import { DeviceLocation } from '../entity/device-location.entity';
export const DevicePositionSchema = new EntitySchema<DevicePosition>({
  name: 'DevicePosition',
  target: DevicePosition,
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
    speed: {
      type: 'decimal',
      nullable: true,
    },
    recordNumber: {
      type: Number,
    },
  },
  relations: {
    deviceId: {
      type: 'many-to-one',
      target: DeviceLocation,
      nullable:true,
    },
  },
});
