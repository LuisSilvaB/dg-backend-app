import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/Role';
import { Permission } from '../entities/Permission';
import { Rol_Pemission } from '../entities/Rol_Pemission';

@Injectable()
export class RolePermissionSeeder {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
    @InjectRepository(Rol_Pemission)
    private readonly rolePermissionRepository: Repository<Rol_Pemission>,
  ) {}

  public async run(): Promise<void> {
    const adminRole = await this.roleRepository.findOneBy({ name: 'RH-01' });
    const userRole = await this.roleRepository.findOneBy({ name: 'USER-01' });

    const createUserPermission = await this.permissionRepository.findOneBy({
      code: 'P-01-01',
    });
    const deleteUserPermission = await this.permissionRepository.findOneBy({
      code: 'P-01-02',
    });
    const updateUserPermission = await this.permissionRepository.findOneBy({
      code: 'P-01-03',
    });
    const viewUserPermission = await this.permissionRepository.findOneBy({
      code: 'P-01',
    });

    if (adminRole) {
      // Asociar todos los permisos al rol de administrador de RRHH
      const adminPermissions = [
        createUserPermission,
        deleteUserPermission,
        updateUserPermission,
        viewUserPermission,
      ];

      for (const permission of adminPermissions) {
        if (permission) {
          const existingRolePermission =
            await this.rolePermissionRepository.findOneBy({
              rol: adminRole,
              permission: permission,
            });
          if (!existingRolePermission) {
            const newRolePermission = this.rolePermissionRepository.create({
              rol: adminRole,
              permission: permission,
            });
            await this.rolePermissionRepository.save(newRolePermission);
          }
        }
      }
    }

    if (userRole && updateUserPermission) {
      const existingRolePermission =
        await this.rolePermissionRepository.findOneBy({
          rol: userRole,
          permission: updateUserPermission,
        });
      if (!existingRolePermission) {
        const newRolePermission = this.rolePermissionRepository.create({
          rol: userRole,
          permission: updateUserPermission,
        });
        await this.rolePermissionRepository.save(newRolePermission);
      }
    }
  }
}
