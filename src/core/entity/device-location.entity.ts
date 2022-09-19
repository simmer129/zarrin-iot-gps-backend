import { DevicePosition } from './device-position.entity'; 

export class DeviceLocation {
    id: string;
    position: DevicePosition;
    rssi: number;
    imei: number;
    type: string;
    details: string;
    userAccount: string;
    createdAt: Date;
}