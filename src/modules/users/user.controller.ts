import { Controller, Get, UseGuards, Req, Body } from '@nestjs/common'
import { AuthenticationGuard } from '../authentication/authentication.guard'
import { UserService } from './user.service'
import { UserDto } from 'src/dto'

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @UseGuards(AuthenticationGuard)
    @Get()
    getUser(@Req() req: Request, @Body() dto: UserDto) {
        return this.userService.findUser(dto)
    }
}
