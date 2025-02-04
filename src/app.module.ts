import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';
import { EmailModule } from './email/email.module';
import { config } from './config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config]
        }),
        DatabaseModule,
        EmployeeModule,
        EmailModule,
    ],
})
export class AppModule { }
