import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CarDto } from 'src/dto'

@Injectable()
export class CarService {
    constructor(private prismaService: PrismaService) {}

    async getCars() {
        const cars = await this.prismaService.car.findMany({
            take: 50,
        })
        return cars
    }
    async getCar() {}

    async createCar(createCarDto: CarDto) {
        const { model } = createCarDto
        const createCar = this.prismaService.car.create({
            data: {
                model: model,
            },
        })
        return createCar
    }
    async updateCar() {}

    async deleteCar() {}
}
