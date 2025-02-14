import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Document_types } from './Document_types.entity';
import { Employee } from './Employee.entity';

@Entity()
export class Employee_Document {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    unsigned: true,
  })
  id: number;
  @Column({
    width: 60,
    type: 'varchar',
    name: 'file_path',
  })
  file_path: string;

  @Column({
    width: 60,
    type: 'varchar',
    name: 'is_active',
  })
  is_active: string;

  @ManyToOne(
    () => Document_types,
    (document_types) => document_types.employee_documents,
    { onDelete: 'CASCADE' },
  )
  document_types: Document_types;
  @ManyToOne(() => Employee, (employee) => employee.employee_documents, {
    onDelete: 'CASCADE',
  })
  employee: Employee;
}
