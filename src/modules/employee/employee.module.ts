import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from './repository/employee.repository';
import { Employee } from '../../entities/Employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeRepository],
  exports: [EmployeeRepository],
})
export class EmployeeModule {}
