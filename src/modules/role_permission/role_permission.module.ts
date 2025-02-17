import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolPemissionRepository } from './repository/role_permission.repository';
import { RolePermission } from '../../entities/RolPemission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolePermission])],
  providers: [RolPemissionRepository],
  exports: [RolPemissionRepository],
})
export class RolePermissionModule {}
