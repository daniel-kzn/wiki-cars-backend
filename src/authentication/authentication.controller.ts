import { Controller, Post } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";

@Controller("authentication")
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post("signin")
  signin() {
    return this.authenticationService.signin();
  }
  @Post("signup")
  signup() {
    return this.authenticationService.signup();
  }
}
