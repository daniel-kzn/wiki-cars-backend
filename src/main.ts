import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    // Permet d'utiliser les pipes de manière global
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
    await app.listen(3400)
}
bootstrap()
