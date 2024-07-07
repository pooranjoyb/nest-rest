import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // this will make sure that extra params are not sent here
    }),
  );
  app.setGlobalPrefix('/api');
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
