import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Role } from './Role';
import { Permission } from './Permission';

@Entity()
export class Rol_Pemission {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    unsigned: true,
  })
  id: number;

  @ManyToOne(() => Role, (role) => role.rolePermissions, {
    onDelete: 'CASCADE',
  })
  rol: Role;

  @ManyToOne(() => Permission, (permission) => permission.rolePermissions, {
    onDelete: 'CASCADE',
  })
  permission: Permission;
}
