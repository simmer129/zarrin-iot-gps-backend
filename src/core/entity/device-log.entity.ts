import { Device } from './device.entity';

export class DeviceLog {
  id: string;
  lat: number;
  lon: number;
  signal: number;
  battery: number;
  speed: number;
  deviceTime: string;
  createAt: Date;
  device: Device;
}
