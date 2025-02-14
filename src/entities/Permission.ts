import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Role } from './Role';
import { Rol_Pemission } from './Rol_Pemission';

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
  @ManyToMany(() => Role, (role) => role.rolePermissions, {
    onDelete: 'CASCADE',
  })
  rolePermissions: Rol_Pemission[];
}
