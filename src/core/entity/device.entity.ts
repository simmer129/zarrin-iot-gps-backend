import { Account } from './account.entity';

export class Device {
  id: string;
  name: string;
  serial: number;
  recordIndex: number;
  recordHandel: number;
  account: Account;
  createdAt: Date;
}
