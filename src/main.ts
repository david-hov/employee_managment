import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import bodyParser = require('body-parser');
import { AppModule } from './app.module';

async function bootstrap() {
    const app: any = await NestFactory.create(AppModule, {
        logger: process.env.NODE_ENV === 'dev' ? ['log', 'debug', 'error', 'verbose', 'warn'] : ['error', 'verbose', 'log', 'debug'],
    });
    app.setGlobalPrefix('v1')
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    app.use(bodyParser.json({ limit: '25mb' }));
    app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
    await app.listen(3001);
}
bootstrap();
