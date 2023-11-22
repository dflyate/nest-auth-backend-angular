import { IsEmail, MinLength } from "class-validator";

/* eslint-disable prettier/prettier */
export class LoginDto {

    @IsEmail()
    email: string;
    @MinLength(6)
    password: string;
}
