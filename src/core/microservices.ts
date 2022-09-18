import { ClientProviderOptions, Transport } from "@nestjs/microservices";


export const GpsData: ClientProviderOptions={
    name: 'GpsData',
    transport : Transport.TCP,
    options:{
        port: 8000,
    }
}
