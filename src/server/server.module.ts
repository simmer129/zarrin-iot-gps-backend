import { Module } from '@nestjs/common';
import { ServerController } from './server.controller';
import { ClientsModule } from "@nestjs/microservices";
import { GpsData } from 'src/core/microservices';

@Module({
  imports: [ClientsModule.register([GpsData])],
  controllers: [ServerController]
})
export class ServerModule {}
