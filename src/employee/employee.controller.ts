import { Controller, Post, Get, Put, Delete, Param, Body, Logger, UsePipes, ValidationPipe, BadRequestException, InternalServerErrorException, HttpException, HttpCode } from '@nestjs/common';

import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './entities/create-employee.dto';
import { Employee } from './entities/employee.entity';

@Controller('employees')
export class EmployeeController {
    private readonly logger = new Logger(EmployeeController.name);
    constructor(
        private readonly employeeService: EmployeeService
    ) { }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() employeeData: CreateEmployeeDto) {
        try {
            this.logger.log('Received employee data:', JSON.stringify(employeeData));
            return await this.employeeService.create(employeeData);
        } catch (error) {
            this.logger.error('Error creating employee', error.stack);
            if (error?.code === '23505') {
                throw new BadRequestException('Employee with this email already exists');
            }
            throw new InternalServerErrorException('Could not create employee');
        }
    }

    @Get()
    @HttpCode(200)
    async findAll() {
        try {
            const [data, count] = await this.employeeService.findAll();
            return {
                message: 'Request was successful',
                data: {
                    result: data,
                    total: count
                },
            };
        } catch (error) {
            throw new HttpException({
                status: error.getStatus(),
                message: error.message,
            }, error.getStatus());
        }
    }

    @Get(':id')
    @HttpCode(200)
    async findOne(@Param('id') id: string) {
        try {
            const result = await this.employeeService.findOne(Number(id));
            return {
                message: 'Request was successful',
                data: result,
            };
        } catch (error) {
            throw new HttpException({
                status: error.getStatus(),
                message: error.message,
            }, error.getStatus());
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateData: Partial<Employee>) {
        try {
            return await this.employeeService.update(Number(id), updateData);
        } catch (error) {
            throw new InternalServerErrorException('Could not update employee');
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        try {
            return await this.employeeService.remove(Number(id));
        } catch (error) {
            throw new InternalServerErrorException('Could not delete employee');
        }
    }
}
