import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    jobTitle?: string;

    @IsString()
    department?: string;

    @IsEmail()
    email?: string;
}
