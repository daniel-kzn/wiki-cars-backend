import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateCarDto {
    @IsNotEmpty()
    @IsString()
    readonly id: string
    @IsNotEmpty()
    @IsString()
    readonly model: string
}
