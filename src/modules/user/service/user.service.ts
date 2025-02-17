import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/entities/User.entity';
import { PermissionService } from '@/modules/pemission/service/permission.service';
import * as bcrypt from 'bcrypt';
import { RoleService } from '@/modules/role/service/rol.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly permissionService: PermissionService,
    private readonly roleService: RoleService,
  ) {}

  async findByEmail(email: string): Promise<any> {
    try {
      const user = await this.userRepository.findOne({
        where: { email },
        relations: ['role'],
      });

      if (user) {
        const permissions =
          await this.permissionService.findPermissionByUserRol(user.role.id);
        return { ...user, permissions };
      }
      return null;
    } catch (error) {
      console.log('error', error);
      throw new InternalServerErrorException(error);
    }
  }

  async createUser(user: User, roleId: number) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await this.userRepository.save({
      ...user,
      password: hashedPassword,
      role: { id: roleId },
    });
    return newUser;
  }
}
