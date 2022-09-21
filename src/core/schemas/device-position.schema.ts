import { DevicePosition } from '../entity/device-position.entity';
import { EntitySchema } from 'typeorm';

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
});
