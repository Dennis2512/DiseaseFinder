import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  {Logger} from '@nestjs/common'

//const port = process.env.port || 3000 || 80;
const port = 443;
  const baseurl = 'https://35.234.114.16:';
  //const baseurl = 'http://localhost:'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
  Logger.log(`Server running on ${baseurl}${port}`, 'Bootstrap');
}
bootstrap();
