import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Role } from './Role.entity';
import { Permission } from './Permission.entity';

@Entity({ name: 'role_permission' })
export class RolePermission {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    unsigned: true,
  })
  id: number;

  @ManyToOne(() => Role, (role) => role.rolePermissions, {
    onDelete: 'CASCADE',
  })
  role: Role;

  @ManyToOne(() => Permission, (permission) => permission.rolePermissions, {
    onDelete: 'CASCADE',
  })
  permission: Permission;
}
