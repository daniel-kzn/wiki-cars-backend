import { Module } from "@nestjs/common";
import { AuthenticationModule } from "./authentication/authentication.module";
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { CarBrandModule } from './car-brand/car-brand.module';

@Module({
  imports: [AuthenticationModule, UserModule, CarModule, CarBrandModule],
})
export class AppModule {}
