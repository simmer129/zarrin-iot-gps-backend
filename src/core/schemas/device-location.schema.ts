import { EntitySchema } from "typeorm";
import { DeviceLocation } from "../entity/device-location.entity";
import { DevicePosition } from '../entity/device-position.entity';
import { User } from '../entity/user.entity';

export const DeviceLocationSchema = new EntitySchema<DeviceLocation> ({
    name: 'DeviceLocation',
    target: DeviceLocation,
    columns:{
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        rssi:{
            type:Number,
            nullable:true,
            default:0,
        },
        imei:{
            type:Number,
            nullable:true,
            unique:true,
        },
        type:{
            type:String,
        },
        details:{
            type:String,
        },
        createdAt:{
            type:Date,
            createDate:true,
        },
    },
    relations:{
        position:{
            type:'one-to-many',
            target:DevicePosition,
            nullable:true,
        },
        userAccount:{
            type:'many-to-one',
            target:User,
            nullable:true,
        }
    }
});