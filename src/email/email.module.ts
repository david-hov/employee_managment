import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { EmailService } from './email.service';
import { EmailProcessor } from './email.processor';

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'email',
            defaultJobOptions: {
                removeOnComplete: false // can be true, because of there is no need to track them after they finish
            }
        }),
    ],
    providers: [EmailService, EmailProcessor],
    exports: [EmailService],
})
export class EmailModule { }
