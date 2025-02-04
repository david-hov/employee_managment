import { Process, Processor } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';
import { Job } from 'bull';
import * as nodemailer from 'nodemailer';

@Processor('email')
export class EmailProcessor {
    constructor(
        private readonly configService: ConfigService
    ) { }

    @Process('sendWelcomeEmail')
    async handleSendWelcomeEmail(job: Job<{ email: string }>) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: this.configService.get('emailUser'),
                pass: this.configService.get('emailPassword'),
            }
        });
        try {
            await transporter.sendMail({
                from: '"Company" <example@gmail.com>',
                to: job.data.email,
                subject: 'Demo invite template!',
                text: 'Hello, welcome to our company!',
            });
            console.log(`Email sent to ${job.data.email}`);
        } catch (error) {
            console.log(`Error ${error}`);
            return false;
        }
    }
}
