import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return ({
                    type: config.get('database.databaseType'),
                    host: config.get('database.databaseHost'),
                    port: config.get('database.databasePort'),
                    database: config.get('database.databaseName'),
                    username: config.get('database.databaseUserName'),
                    password: config.get('database.databasePassword'),
                    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                    synchronize: true,
                    timezone: 'Z',
                } as TypeOrmModuleOptions)
            },
        }),
    ],
    providers: [],
    exports: [],
})

export class DatabaseModule { }
