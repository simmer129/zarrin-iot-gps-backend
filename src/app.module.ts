import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerService } from './server/server.service';
import { ServerModule } from './server/server.module';
import { DeviceLocationModule } from './device-location/device-location.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'admin',
      database: 'gps',
      autoLoadEntities: true,
      synchronize: true,
    }
    ),
    ServerModule,
    DeviceLocationModule,
  ],
  controllers: [AppController],
  providers: [AppService, ServerService],
})
export class AppModule {}
