import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateCarDto, DeleteCarDto, GetCarDto, UpdateCarDto } from './dto'

@Injectable()
export class CarService {
    constructor(private prismaService: PrismaService) {}

    async getCars() {
        const cars = await this.prismaService.car.findMany({
            take: 50,
        })
        return cars
    }

    async getCar(dto: GetCarDto) {
        const car = await this.prismaService.car.findUnique({
            where: {
                id: dto.id,
            },
        })
        return car
    }

    async createCar(createCarDto: CreateCarDto) {
        const car = await this.prismaService.car.create({
            data: {
                model: createCarDto.model,
            },
        })
        return car
    }

    async updateCar(dto: UpdateCarDto) {
        const car = await this.prismaService.car.update({
            where: { id: dto.id },
            data: dto,
        })
        return car
    }

    async deleteCar(dto: DeleteCarDto) {
        const car = await this.prismaService.car.delete({
            where: { id: dto.id },
        })
        return car.id
    }
}
