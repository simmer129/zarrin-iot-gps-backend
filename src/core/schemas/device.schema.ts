import { EntitySchema } from "typeorm";
import { Device } from "../entities/device.entity";

export const DeviceSchema = new EntitySchema<Device> ({
    name: 'Device',
    target: Device,
    columns:{
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        title:{
            type: String,
            nullable: true,
        },
        serial:{
            type: String,
            unique: true,
        },
        pin:{
            type: String,
            nullable: true,
        },
        details:{
            type: 'simple-json',
            default:{},
        },
        createdAt:{
            type:'date',
            createDate: true,
        }
    }
}) 