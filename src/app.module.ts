import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederModule } from './seeds/seeds.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { EmployeeDocumentModule } from './modules/employee_document/employee_document.module';
import { RolePermissionModule } from './modules/row_permission/row_permission.module';
import { DocumentTypeModule } from './modules/document_type/document_type.module';
import { join } from 'path';
import { User } from './entities/User';
import { Role } from './entities/Role';
import { Permission } from './entities/Permission';
import { Employee } from './entities/Employee';
import { Document_types } from './entities/Document_types';
import { Rol_Pemission } from './entities/Rol_Pemission';
import { Employee_Document } from './entities/Employee_Document';

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
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [
          User,
          Role,
          Permission,
          Employee,
          Document_types,
          Rol_Pemission,
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
    SeederModule,
    UserModule,
    RoleModule,
    EmployeeModule,
    EmployeeDocumentModule,
    RolePermissionModule,
    DocumentTypeModule,
  ],
})
export class AppModule {}
