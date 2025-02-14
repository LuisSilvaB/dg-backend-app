import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolPemissionRepository } from './repository/row_permission.repository';
import { Rol_Pemission } from '../../entities/Rol_Pemission';

@Module({
  imports: [TypeOrmModule.forFeature([Rol_Pemission])],
  providers: [RolPemissionRepository],
  exports: [RolPemissionRepository],
})
export class RolePermissionModule {}
