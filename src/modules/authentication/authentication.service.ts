import { ForbiddenException, Injectable } from '@nestjs/common'
import { AuthenticationDto } from 'src/dto'
import { PrismaService } from 'src/modules/prisma/prisma.service'
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthenticationService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
    ) {}

    async signin(dto: AuthenticationDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        })
        // Guard
        if (!user) throw new ForbiddenException('Credential incorrent')

        const pwMatches = await argon.verify(user.password, dto.password)
        if (!pwMatches) throw new ForbiddenException('Crendential incorrect')

        return this.signToken(user.id, user.email)
    }

    async signup(dto: AuthenticationDto) {
        const hashedPassword = await argon.hash(dto.password)
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    password: hashedPassword,
                },
            })

            delete user.password
            return user
        } catch (err) {
            if (err instanceof PrismaClientKnownRequestError) {
                if (err.code === 'P2002') {
                    throw new ForbiddenException('Credentiels taken')
                }
            }
            throw new ForbiddenException(err)
        }
    }

    async signToken(
        userId: string,
        email: string
    ): Promise<{ access_token: string }> {
        const payload: {} = { sub: userId, email }
        const secret: string = this.config.get('JWT_SECRET')
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '20m',
            secret: secret,
        })
        return { access_token: token }
    }
}
