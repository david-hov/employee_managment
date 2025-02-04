import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Employee } from './entities/employee.entity';
import { EmailService } from '../email/email.service';
import { CreateEmployeeDto } from './entities/create-employee.dto';

@Injectable()
export class EmployeeService {
    private readonly logger = new Logger(EmployeeService.name);
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
        private readonly emailService: EmailService,
    ) { }

    async create(employeeData: CreateEmployeeDto): Promise<Employee> {
        const employee = this.employeeRepository.create(employeeData);
        const savedEmployee = await this.employeeRepository.save(employee);
        if (savedEmployee.email) {
            await this.emailService.sendWelcomeEmail(savedEmployee.email);
        }
        this.logger.log('Employee data created:', JSON.stringify(employeeData));
        return savedEmployee;
    }

    async findAll() {
        return await this.employeeRepository.findAndCount();
    }

    async findOne(id: number) {
        return await this.employeeRepository.findOneBy({ id });
    }

    async update(id: number, updateData: Partial<Employee>) {
        return await this.employeeRepository.update(id, updateData);
    }

    async remove(id: number) {
        return await this.employeeRepository.delete(id);
    }
}
