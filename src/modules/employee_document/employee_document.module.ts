import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee_DocumentRepository } from './repository/employee_document.repository';
import { Employee_Document } from '../../entities/Employee_Document';

@Module({
  imports: [TypeOrmModule.forFeature([Employee_Document])],
  providers: [Employee_DocumentRepository],
  exports: [Employee_DocumentRepository],
})
export class EmployeeDocumentModule {}
