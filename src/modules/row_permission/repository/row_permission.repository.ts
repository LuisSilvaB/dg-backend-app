import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { RolePermission } from '../../../entities/RolPemission.entity';

@Injectable()
export class RolPemissionRepository extends Repository<RolePermission> {
  constructor(dataSource: DataSource) {
    super(RolePermission, dataSource.createEntityManager());
  }
}
