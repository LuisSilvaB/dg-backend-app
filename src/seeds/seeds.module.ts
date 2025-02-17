import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/User.entity';
import { Role } from '../entities/Role.entity';
import { Permission } from '../entities/Permission.entity';
import { RolePermission } from '../entities/RolPemission.entity';
import { RolePermissionSeeder } from './PermissionRole.seed';
import { AdminUserSeeder } from './User.seed';
import { PermissionSeeder } from './Permission.seed';
import { RoleSeeder } from './Role.seed';
import { UserModule } from '../modules/user/user.module';
import { RoleModule } from '../modules/role/role.module';
import { RolePermissionModule } from '../modules/role_permission/role_permission.module';
import { Employee } from '../entities/Employee.entity';
import { Employee_Document } from '../entities/Employee_Document.entity';
import { Document_types } from '../entities/Document_types.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [
          User,
          Role,
          Permission,
          RolePermission,
          Employee,
          Employee_Document,
          Document_types,
        ],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User, Role, Permission, RolePermission]),
    RolePermissionModule,
    RoleModule,
    Permission,
    UserModule,
  ],
  providers: [
    AdminUserSeeder,
    RolePermissionSeeder,
    PermissionSeeder,
    RoleSeeder,
  ],
  exports: [
    AdminUserSeeder,
    RolePermissionSeeder,
    PermissionSeeder,
    RoleSeeder,
  ],
})
export class SeederModule {}
