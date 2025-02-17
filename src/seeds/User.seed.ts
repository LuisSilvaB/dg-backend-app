import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';
import { Role } from '../entities/Role.entity';
import * as bcrypt from 'bcrypt';
import dataSource from '@/config/data-source';

@Injectable()
export class AdminUserSeeder {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) {}

  public async run(): Promise<void> {
    const roleRepository = dataSource.getRepository(Role);
    const userRepository = dataSource.getRepository(User);

    const adminRole = await roleRepository.findOneBy({ name: 'RH-01' });

    if (adminRole) {
      const existingAdminUser = await userRepository.findOneBy({
        email: 'admin@example.com',
      });
      if (!existingAdminUser) {
        const hashedPassword = await bcrypt.hash('adminpassword', 10);

        const newAdminUser = userRepository.create({
          first_name: 'Admin',
          last_name: 'User',
          email: 'admin@example.com',
          default_route: '/empleados',
          password: hashedPassword,
          role: adminRole,
        });

        await userRepository.save(newAdminUser);
      }
    }
  }
}
