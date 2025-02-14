import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RolePermission } from './RolPemission.entity';

@Entity()
export class Permission {
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
  @Column({
    width: 60,
    type: 'varchar',
    name: 'slug',
  })
  code: string;
  @OneToMany(
    () => RolePermission,
    (rolePermission) => rolePermission.permission,
  )
  rolePermissions: RolePermission[];
}
