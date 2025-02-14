import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Employee_Document } from '../../../entities/Employee_Document.entity';

@Injectable()
export class Employee_DocumentRepository extends Repository<Employee_Document> {
  constructor(dataSource: DataSource) {
    super(Employee_Document, dataSource.createEntityManager());
  }
}
