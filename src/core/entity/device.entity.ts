import { DevicePosition } from './device-position.entity'; 
import { User } from './user.entity';

export class Device {
    id: string;
    rssi: number;
    imei: number;
    type: string;
    details: string;
    userAccount: User;
    position: DevicePosition;
    createdAt: Date;
}