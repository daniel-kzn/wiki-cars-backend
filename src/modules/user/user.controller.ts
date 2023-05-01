import { Controller, Get, UseGuards } from '@nestjs/common'
import { AuthenticationGuard } from '../authentication/authentication.guard'
import { AuthenticationService } from '../authentication/authentication.service'

@Controller('user')
export class UserController {
    @UseGuards(AuthenticationGuard)
    @Get()
    getUser() {
        return { 'user-info': 'yep' }
    }
}
