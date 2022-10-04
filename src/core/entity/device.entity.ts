import { Account } from './account.entity';


export class Device {
    id: string;
    name: string;
    serial: number;
    lat: number;
    lon: number;
    signal: number;
    battery : number;
    speed: number;
    recordIndex: number;
    account: Account;
    createdAt: Date;
}