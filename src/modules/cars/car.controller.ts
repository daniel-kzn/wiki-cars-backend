import {
    Body,
    Controller,
    Delete,
    Get,
    Patch,
    Post,
    Query,
} from '@nestjs/common'
import { CarService } from './car.service'
import { GetCarDto, CreateCarDto } from './dto/index'

@Controller('cars')
export class CarController {
    constructor(private carService: CarService) {}

    @Get()
    getCars() {
        return this.carService.getCars()
    }

    @Get(':carId')
    getCar(@Query() dto: GetCarDto) {}

    @Post()
    createCar(@Body() dto: CreateCarDto) {
        console.log({ dto })
        return this.carService.createCar(dto)
    }

    @Patch(':carId')
    updateCar() {}

    @Delete(':carId')
    deleteCar() {}
}
