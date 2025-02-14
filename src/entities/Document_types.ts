import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employeee_Document } from './Employeee_Document';

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
    () => Employeee_Document,
    (employee_document) => employee_document.document_types,
  )
  employee_documents: Employeee_Document[];
}
