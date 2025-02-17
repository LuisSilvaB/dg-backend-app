import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/User.entity';
import { UserService } from './service/user.service';
import { RolePermissionModule } from '../role_permission/role_permission.module';
import { PermissionModule } from '../pemission/pemission.module';
import { UserRepository } from './repository/user.repository';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RolePermissionModule,
    PermissionModule,
    RoleModule,
  ],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
