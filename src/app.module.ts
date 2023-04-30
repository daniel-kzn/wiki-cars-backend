import { Module } from '@nestjs/common'
import { AuthenticationModule } from './modules/authentication/authentication.module'
import { UserModule } from './modules/user/user.module'
import { CarModule } from './modules/car/car.module'
import { CarBrandModule } from './modules/car-brand/car-brand.module'
import { PrismaModule } from './modules/prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        AuthenticationModule,
        UserModule,
        CarModule,
        CarBrandModule,
        PrismaModule,
    ],
})
export class AppModule {}
