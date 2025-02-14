import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionRepository } from './repository/pemission.repository';
import { Permission } from '../../entities/Permission';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  providers: [PermissionRepository],
  exports: [PermissionRepository],
})
export class PemissionModule {}
