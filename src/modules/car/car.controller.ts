import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { CarService } from './car.service'
import { CarDto, CreateCarDto } from 'src/dto'

@Controller('cars')
export class CarController {
    constructor(private carService: CarService) {}
    @Get()
    getCars() {
        return this.carService.getCars()
    }

    @Get(':carId')
    getCar() {}

    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        console.log({ createCarDto })
        return this.carService.createCar(createCarDto)
    }

    @Patch()
    updateCar() {}

    @Delete()
    deleteCar() {}
}
