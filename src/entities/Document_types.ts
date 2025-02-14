import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee_Document } from './Employee_Document';

@Entity()
export class Document_types {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    unsigned: true,
  })
  id: number;

  @Column({
    width: 60,
    type: 'varchar',
    name: 'name',
  })
  name: string;

  @OneToMany(
    () => Employee_Document,
    (employee_document) => employee_document.document_types,
  )
  employee_documents: Employee_Document[];
}
