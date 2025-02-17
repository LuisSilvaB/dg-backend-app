import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { EmployeeDocumentModule } from './modules/employee_document/employee_document.module';
import { RolePermissionModule } from './modules/role_permission/role_permission.module';
import { DocumentTypeModule } from './modules/document_type/document_type.module';
import { join } from 'path';
import { User } from './entities/User.entity';
import { Role } from './entities/Role.entity';
import { Permission } from './entities/Permission.entity';
import { Employee } from './entities/Employee.entity';
import { Document_types } from './entities/Document_types.entity';
import { RolePermission } from './entities/RolPemission.entity';
import { Employee_Document } from './entities/Employee_Document.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
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
          Employee,
          Document_types,
          RolePermission,
          Employee_Document,
        ],
        migrations: [join(__dirname, 'database', 'migrations', '*.{ts,js}')],
        synchronize: configService.get('NODE_ENV') !== 'production',
        logging: configService.get('NODE_ENV') !== 'production',
        ssl:
          configService.get('NODE_ENV') === 'production'
            ? { rejectUnauthorized: false }
            : false,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    RoleModule,
    EmployeeModule,
    EmployeeDocumentModule,
    RolePermissionModule,
    DocumentTypeModule,
  ],
})
export class AppModule {}
