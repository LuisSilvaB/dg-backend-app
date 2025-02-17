import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './repository/role.repository';
import { Role } from '../../entities/Role.entity';
import { RoleService } from './service/rol.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleRepository, RoleService],
  exports: [RoleRepository, RoleService],
})
export class RoleModule {}
