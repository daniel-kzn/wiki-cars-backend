import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthenticationService {
  signin() {
    return { msg: "Sign in !" };
  }
  signup() {
    return { msg: "Sign in !" };
  }
}
