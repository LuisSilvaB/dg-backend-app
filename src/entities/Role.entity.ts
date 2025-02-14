import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RolePermission } from './RolPemission.entity';
import { User } from './User.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    unsigned: true,
  })
  id: number;

  @Column({
    width: 60,
    type: 'varchar',
    name: 'name',
  })
  name: string;

  @Column({
    width: 60,
    type: 'varchar',
    name: 'description',
  })
  description: string;

  @OneToMany(() => RolePermission, (rolePermission) => rolePermission.role)
  rolePermissions: RolePermission[];
  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
