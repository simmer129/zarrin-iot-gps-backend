import { EntitySchema } from "typeorm";
import { DeviceLocation } from "../entity/device-location.entity";

export const DeviceSchema = new EntitySchema<DeviceLocation> ({
    name: 'Device',
    target: DeviceLocation,
    columns:{
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        }, 
    }
});