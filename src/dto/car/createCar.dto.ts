import { IsNotEmpty, IsString } from 'class-validator'

export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    model: string
}
