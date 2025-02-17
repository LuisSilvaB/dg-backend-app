import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/service/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@/modules/user/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    const isValidPassword = await bcrypt.compare(pass, user.password);
    if (user && isValidPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(email: string, password: string) {
    const userValid = await this.validateUser(email, password);
    if (!userValid) {
      return {
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Invalid credentials',
      };
    }
    const payload = { userValid };
    return {
      statusCode: HttpStatus.OK,
      message: 'Login success',
      data: {
        access_token: this.jwtService.sign(payload),
        default_route: userValid.default_route,
      },
    };
  }

  async register(user: Omit<User, 'role' | 'employees'>, roleId: number) {
    const userWithRoleAndEmployees = {
      ...user,
      role: undefined,
      employees: [],
      default_route: '/mi-perfil',
    };
    const newUser = await this.userService.createUser(
      userWithRoleAndEmployees,
      roleId,
    );
    return newUser;
  }
}
