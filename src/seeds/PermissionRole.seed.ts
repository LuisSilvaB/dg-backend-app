import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/Role.entity';
import { Permission } from '../entities/Permission.entity';
import { RolePermission } from '../entities/RolPemission.entity';
import dataSource from '@/config/data-source';

@Injectable()
export class RolePermissionSeeder {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
    @InjectRepository(RolePermission)
    private readonly rolePermissionRepository: Repository<RolePermission>,
  ) {}

  public async run(): Promise<void> {
    const roleRepository = dataSource.getRepository(Role);
    const permissionRepository = dataSource.getRepository(Permission);
    const rolePermissionRepository = dataSource.getRepository(RolePermission);
    const adminRole = await roleRepository.findOneBy({ name: 'RH-01' });
    const userRole = await roleRepository.findOneBy({ name: 'USER-01' });

    const createUserPermission = await permissionRepository.findOneBy({
      code: 'P-01-01',
    });
    const deleteUserPermission = await permissionRepository.findOneBy({
      code: 'P-01-02',
    });
    const updateUserPermission = await permissionRepository.findOneBy({
      code: 'P-01-03',
    });
    const viewUserPermission = await permissionRepository.findOneBy({
      code: 'P-01',
    });

    if (adminRole) {
      const adminPermissions = [
        createUserPermission,
        deleteUserPermission,
        updateUserPermission,
        viewUserPermission,
      ];

      for (const permission of adminPermissions) {
        if (permission) {
          const existingRolePermission =
            await rolePermissionRepository.findOneBy({
              role: adminRole,
              permission: permission,
            });
          if (!existingRolePermission) {
            const newRolePermission = rolePermissionRepository.create({
              role: adminRole,
              permission: permission,
            });
            await rolePermissionRepository.save(newRolePermission);
          }
        }
      }
    }

    if (userRole && updateUserPermission) {
      const existingRolePermission = await rolePermissionRepository.findOneBy({
        role: userRole,
        permission: updateUserPermission,
      });
      if (!existingRolePermission) {
        const newRolePermission = rolePermissionRepository.create({
          role: userRole,
          permission: updateUserPermission,
        });
        await rolePermissionRepository.save(newRolePermission);
      }
    }
  }
}
