import { ClientProviderOptions, Transport } from "@nestjs/microservices";


export const UserMicroservice: ClientProviderOptions = {
    name: 'USER_SERVICE',
    transport: Transport.TCP,
    options: {
      port: 8081,
    }
  }
