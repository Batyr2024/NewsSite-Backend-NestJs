import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
im
import { ValidationPipe } from '@nestjs/common';


async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  app.enableCors({
    origin: '*'
  })
  await app.listen(configService.get('PORT'))
  console.log('server start on: ', configService.get('PORT'))
}
bootstrap();

