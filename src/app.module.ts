import { Module } from '@nestjs/common'
import { AuthenticationModule } from './modules/authentication/authentication.module'
import { UserModule } from './modules/users/user.module'
import { CarModule } from './modules/cars/car.module'
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
        PrismaModule,
    ],
})
export class AppModule {}
