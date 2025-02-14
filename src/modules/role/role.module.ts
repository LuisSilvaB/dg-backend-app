import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './repository/role.repository';
import { Role } from '../../entities/Role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleRepository],
  exports: [RoleRepository],
})
export class RoleModule {}
