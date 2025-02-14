import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { User } from '@/entities/User.entity';
import { Role } from '@/entities/Role.entity';
import { Permission } from '@/entities/Permission.entity';
import { RolePermission } from '@/entities/RolPemission.entity';
import { Employee } from '@/entities/Employee.entity';
import { Employee_Document } from '@/entities/Employee_Document.entity';
import { Document_types } from '@/entities/Document_types.entity';

dotenv.config();

const configService = new ConfigService();

const AppDataSource = new DataSource({
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
    RolePermission,
    Employee,
    Employee_Document,
    Document_types,
  ],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  subscribers: [],
});

export default AppDataSource;
