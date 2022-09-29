import { Double } from 'typeorm';
import { Device } from './device.entity';
export class DevicePosition {
    id: string;
    device:Device;
    lat:Double;
    lon:Double;
    speed:Double;
    recordNumber:Double;
    createdAt:Date;
}