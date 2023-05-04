// TODO : faire de l'héritage plutot que réecrir pour chaque opération
export class GetCarDto {
    // Berline, coupe
    readonly id: string
    readonly type?: string
    readonly model: string
    readonly manufacturer?: string
    readonly year?: number
    readonly fuel?: string
}
