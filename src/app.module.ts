import { Module } from "@nestjs/common";
import { AuthenticationModule } from "./authentication/authentication.module";
import { UserModule } from "./user/user.module";
import { CarModule } from "./car/car.module";
import { CarBrandModule } from "./car-brand/car-brand.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [
    AuthenticationModule,
    UserModule,
    CarModule,
    CarBrandModule,
    PrismaModule,
  ],
})
export class AppModule {}
