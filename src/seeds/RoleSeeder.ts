import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/Role';

@Injectable()
export class RoleSeeder {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  public async run(): Promise<void> {
    const roles = [
      {
        name: 'RH-01',
        description: 'RRHH ADMINISTRATOR ROLE',
      },
      {
        name: 'USER-01',
        description: 'REGULAR USER ROLE',
      },
    ];

    for (const role of roles) {
      const existingRole = await this.roleRepository.findOneBy({
        name: role.name,
      });
      if (!existingRole) {
        const newRole = this.roleRepository.create(role);
        await this.roleRepository.save(newRole);
      }
    }
  }
}
