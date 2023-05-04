import { IsNotEmpty, IsString } from 'class-validator'

export class DeleteCarDto {
    @IsNotEmpty()
    @IsString()
    readonly id: string
}
