import { Module } from '@nestjs/common'
import { AuthenticationController } from './authentication.controller'
import { AuthenticationService } from './authentication.service'
import { PrismaModule } from 'src/modules/prisma/prisma.module'
import { JwtModule } from '@nestjs/jwt'

@Module({
    imports: [
        JwtModule.register({
            global: true,
        }),
    ],
    controllers: [AuthenticationController],
    providers: [AuthenticationService],
})
export class AuthenticationModule {}
