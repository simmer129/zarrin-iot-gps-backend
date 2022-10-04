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
        name:{
            type:String,
            nullable:true,
        },
        serial:{
            type:'bigint',
            nullable:true,
        },
        lat:{
            type:'decimal',
            nullable:true,
        },
        lon:{
            type:'decimal',
            nullable:true,
        },
        signal:{
            type:'bigint',
            nullable:true
        },
        battery:{
            type:'bigint',
            nullable:true
        },
        speed:{
            type:'bigint',
            nullable:true
        },
        recordIndex:{
            type:'bigint',
            nullable:true
        },
        createdAt:{
            type:Date,
            createDate:true,
        },
    },
    relations:{
        account: {
            type: 'many-to-one',
            target: 'Account',
            nullable: true,
        }
    }
});
