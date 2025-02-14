import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { Role } from '../entities/Role';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminUserSeeder {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  public async run(): Promise<void> {
    const adminRole = await this.roleRepository.findOneBy({ name: 'RH-01' });

    if (adminRole) {
      const existingAdminUser = await this.userRepository.findOneBy({
        email: 'admin@example.com',
      });
      if (!existingAdminUser) {
        const hashedPassword = await bcrypt.hash('adminpassword', 10);

        const newAdminUser = this.userRepository.create({
          first_name: 'Admin',
          last_name: 'User',
          email: 'admin@example.com',
          password: hashedPassword,
          role: adminRole,
        });

        await this.userRepository.save(newAdminUser);
      }
    }
  }
}
