import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthenticationDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Injectable()
export class AuthenticationService {
  constructor(private prisma: PrismaService) {}

  async signin(dto: AuthenticationDto) {}

  async signup(dto: AuthenticationDto) {
    const hashedPassword = await argon.hash(dto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hashedPassword,
        },
      });

      delete user.password;
      return user;
    } catch (err) {
      //if (err instanceof PrismaClientKnownRequestError) {
      //  if (err.code === "P2002") {
      //    throw new ForbiddenException("Credentiels taken");
      //  }
      //}
      throw new ForbiddenException(err);
    }
  }
}
