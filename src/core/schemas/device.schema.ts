import { EntitySchema } from 'typeorm';
import { Device } from '../entity/device.entity';

export const DeviceSchema = new EntitySchema<Device>({
  name: 'Device',
  target: Device,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: String,
      nullable: true,
    },
    serial: {
      type: 'int',
      nullable: true,
      unique: true,
    },
    recordIndex: {
      type: 'int',
      nullable: true,
    },
    recordHandel: {
      type: 'int',
      generated: 'increment',
    },
    createdAt: {
      type: Date,
      createDate: true,
    },
  },
  relations: {
    account: {
      type: 'many-to-one',
      target: 'Account',
      nullable: true,
    },
  },
});
