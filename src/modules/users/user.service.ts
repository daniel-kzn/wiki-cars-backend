import { Injectable } from '@nestjs/common'
import { UserDto } from 'src/dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findUser(dto: UserDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: dto.id,
            },
        })
        return user
    }
}
