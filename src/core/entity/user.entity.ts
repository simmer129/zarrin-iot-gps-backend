import { Device } from './device.entity';
import { GenderType} from './gender-type.enum';
import { UserRole } from './user-role.enum';

export class User {
    id: string;
    userName: string;
    password: string;
    mobile: number;
    email: string;
    gender:GenderType;
    avatar: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    role:UserRole;
    instagram: string;
    phoneNumber: number;
    address: string;
    device: Device;
    createdAt: Date;
}