import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    jobTitle: string;

    @Column({ nullable: true })
    department: string;

    @Column({ nullable: true })
    email: string;
}
