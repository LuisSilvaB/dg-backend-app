import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Rol_Pemission } from '../../../entities/Rol_Pemission';

@Injectable()
export class RolPemissionRepository extends Repository<Rol_Pemission> {
  constructor(dataSource: DataSource) {
    super(Rol_Pemission, dataSource.createEntityManager());
  }
}
