import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  const option = new DocumentBuilder()
    .setTitle('Proy Mono')
    .setDescription('App to try mono app')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, option);

  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(3000);
}
bootstrap();

