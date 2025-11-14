import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ? Number(process.env.PORT) : 9000;
  
app.enableCors({
  origin: '*',
  methods: '*',
  allowedHeaders: '*',
});

 await app.listen(PORT);

  console.log(`Server is running on http://localhost:${PORT}`);}
bootstrap();
