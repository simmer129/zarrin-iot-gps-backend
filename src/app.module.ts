import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './device/device.module';
import { UserModule } from './user/user.module';
import { DevicePositionModule } from './device-position/device-position.module';



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
    DeviceModule,
    UserModule,
    DevicePositionModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
