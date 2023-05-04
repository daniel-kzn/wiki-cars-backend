import { Body, Controller, Post, Req } from '@nestjs/common'
import { AuthenticationService } from './authentication.service'
import { AuthenticationDto } from 'src/dto'

@Controller('authentication')
export class AuthenticationController {
    constructor(private authenticationService: AuthenticationService) {}

    @Post('signin')
    // Body generic selon le framework choisis
    signin(@Body() dto: AuthenticationDto) {
        return this.authenticationService.signin(dto)
    }
    @Post('signup')
    signup(@Body() dto: AuthenticationDto) {
        return this.authenticationService.signup(dto)
    }
}
