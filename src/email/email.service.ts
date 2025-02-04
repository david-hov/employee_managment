import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class EmailService {
    constructor(
        @InjectQueue('email') private readonly emailQueue: Queue
    ) { }

    async sendWelcomeEmail(employeeEmail: string) {
        await this.emailQueue.add('sendWelcomeEmail',
            { email: employeeEmail },
            { jobId: `${new Date().getTime()}-${employeeEmail}` })
    }
}
