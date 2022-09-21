import { EntitySchema } from "typeorm";
import { Device } from "../entity/device.entity";

export const DeviceSchema = new EntitySchema<Device> ({
    name: 'Device',
    target: Device,
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
            target:'DevicePosition',
            nullable:true,
        },
        userAccount:{
            type:'many-to-one',
            target:'User',
            nullable:true,
        }
    }
});