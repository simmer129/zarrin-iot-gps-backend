import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'log', 'verbose'],
  });
  const config = new DocumentBuilder()
  .setTitle('GPS IOT')
  .setVersion('0.1')
  .build();
  const document = SwaggerModule.createDocument(app, config, {
    deepScanRoutes: true,
    include: [AppModule]
  });
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);
}
bootstrap();