import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from '../entities/Permission.entity';

@Injectable()
export class PermissionSeeder {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  public async run(): Promise<void> {
    console.log('Running permission seeder...');
    console.log(this.permissionRepository);
    const permissions = [
      {
        name: 'CREATE_USER',
        description: 'Permission to create a user',
        code: 'P-01-01',
      },
      {
        name: 'DELETE_USER',
        description: 'Permission to delete a user',
        code: 'P-01-02',
      },
      {
        name: 'UPDATE_USER',
        description: 'Permission to update a user',
        code: 'P-01-03',
      },
      {
        name: 'VIEW_USER',
        description: 'Permission to view a user',
        code: 'P-01',
      },
    ];

    for (const permission of permissions) {
      const existingPermission = await this.permissionRepository.findOneBy({
        code: permission.code,
      });
      if (!existingPermission) {
        console.log(permission);
        const newPermission = this.permissionRepository.create(permission);
        await this.permissionRepository.save(newPermission);
      } else {
        console.log(existingPermission);
        existingPermission.name = permission.name;
        existingPermission.description = permission.description;
        await this.permissionRepository.save(existingPermission);
      }
    }
  }
}
