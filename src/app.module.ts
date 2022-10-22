import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './device/device.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DeviceLogController } from './device-log/device-log.controller';
import { DeviceLogModule } from './device-log/device-log.module';
import { DeviceLogService } from './device-log/device-log.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '', 'iot-gps'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'admin',
      database: 'gps',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DeviceModule,
    AuthModule,
    DeviceLogModule,
  ],
  controllers: [AppController, DeviceLogController],
  providers: [AppService, DeviceLogService],
})
export class AppModule {}
