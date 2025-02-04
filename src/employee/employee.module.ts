import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Employee } from './entities/employee.entity';
import { EmailModule } from '../email/email.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Employee]),
        EmailModule
    ],
    controllers: [EmployeeController],
    providers: [EmployeeService],
})
export class EmployeeModule { }
