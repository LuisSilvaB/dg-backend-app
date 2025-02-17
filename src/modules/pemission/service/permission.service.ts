import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from '@/entities/Permission.entity';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  async findPermissionByUserRol(rolId: number): Promise<any> {
    return this.permissionRepository.findBy({
      rolePermissions: {
        role: {
          id: rolId,
        },
      },
    });
  }
}
