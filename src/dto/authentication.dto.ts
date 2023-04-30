import {
  IsEmail,
  IsNotEmpty,
  IsString,
  isEmail,
  isNotEmpty,
  isString,
} from "class-validator";

export class AuthenticationDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
