import { Double } from 'typeorm';
export class DevicePosition {
    id: string;
    deviceId:string;
    lat:Double;
    lon:Double;
    speed:Double;
    recordNumber:Number;
}