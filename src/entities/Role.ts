import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Permission } from './Permission';
import { Rol_Pemission } from './Rol_Pemission';
import { User } from './User';

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

  @ManyToMany(() => Permission, (permission) => permission.rolePermissions)
  rolePermissions: Rol_Pemission[];

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
