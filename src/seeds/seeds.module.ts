import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/User';
import { Role } from '../entities/Role';
import { Permission } from '../entities/Permission';
import { Rol_Pemission } from '../entities/Rol_Pemission';
import { RolePermissionSeeder } from './PermissionRoleSeeder';
import { AdminUserSeeder } from './UserSeeder';
import { PermissionSeeder } from './PermissionSeeder';
import { RoleSeeder } from './RoleSeeder';
import { UserModule } from '../modules/user/user.module';
import { RoleModule } from '../modules/role/role.module';
import { RolePermissionModule } from '../modules/row_permission/row_permission.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, Permission, Rol_Pemission]),
    UserModule,
    RoleModule,
    RolePermissionModule,
    RolePermissionModule,
  ],
  providers: [
    AdminUserSeeder,
    RolePermissionSeeder,
    PermissionSeeder,
    RoleSeeder,
  ],
  exports: [
    AdminUserSeeder,
    RolePermissionSeeder,
    PermissionSeeder,
    RoleSeeder,
  ],
})
export class SeederModule {}
