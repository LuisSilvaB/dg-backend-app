import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User.entity';
import { Employee_Document } from './Employee_Document.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;
  @Column({
    width: 60,
    type: 'varchar',
    name: 'job_title',
  })
  job_title: string;
  @Column({
    type: 'decimal',
    name: 'salary',
  })
  salary: number;
  @Column({
    width: 100,
    type: 'varchar',
    name: 'document',
  })
  document: string;

  @ManyToOne(() => User, (user) => user.employees, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(
    () => Employee_Document,
    (employee_document) => employee_document.employee,
  )
  employee_documents: Employee_Document[];
}
