import { DevicePosition } from './device-position.entity'; 
import { User } from './user.entity';

export class Device {
    id: string;
    position: DevicePosition;
    rssi: number;
    imei: number;
    type: string;
    details: string;
    userAccount: User;
    createdAt: Date;
}